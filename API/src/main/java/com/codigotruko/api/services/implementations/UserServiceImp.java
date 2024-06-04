package com.codigotruko.api.services.implementations;

import com.codigotruko.api.domain.dtos.auth.GoogleUserRegisterDTO;
import com.codigotruko.api.domain.dtos.auth.UserRegisterDTO;
import com.codigotruko.api.domain.entities.Token;
import com.codigotruko.api.domain.entities.User;
import com.codigotruko.api.repositories.TokenRepository;
import com.codigotruko.api.repositories.UserRepository;
import com.codigotruko.api.services.UserService;
import com.codigotruko.api.utils.JWTTools;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UserServiceImp implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JWTTools jwtTools;
    private final TokenRepository tokenRepository;

    public UserServiceImp(UserRepository userRepository, PasswordEncoder passwordEncoder, JWTTools jwtTools, TokenRepository tokenRepository) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtTools = jwtTools;
        this.tokenRepository = tokenRepository;
    }

    @Override
    @Transactional(rollbackOn = Exception.class)
    public void create(UserRegisterDTO info) {
        User user = new User();
        user.setUsername(info.getUsername());
        user.setPassword(passwordEncoder.encode(info.getPassword()));
        user.setEmail(info.getEmail());
        user.setRole("ROLE_USER");
        userRepository.save(user);
    }

    @Override
    @Transactional(rollbackOn = Exception.class)
    public void createWithGoogle(GoogleUserRegisterDTO info) {
        User newUser = new User();
        newUser.setGoogleId(info.getGoogleId());

        //newUser.setToken(info.getAccessToken());

        newUser.setEmail(info.getEmail());
        newUser.setUsername(info.getUsername());
        newUser.setPassword("12345678aA!");
        newUser.setImageUrl(info.getImageUrl());

        newUser.setRole("ROLE_USER");
        userRepository.save(newUser);
    }

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public void deleteById(UUID id) {
        userRepository.delete(Objects.requireNonNull(userRepository.findById(id).orElse(null)));
    }

    @Override
    public void toggleEnable(String username) {
        User user = userRepository.findByUsernameOrEmail(username, username).orElse(null);
        assert user != null;
        user.setActive(!user.getActive());
        userRepository.save(user);
    }

    @Override
    public boolean isActive(User user) {
        return user.getActive();
    }


    @Override
    public User findByUsernameOrEmail(String username, String email) {
        return userRepository.findByUsernameOrEmail(username, email).orElse(null);
    }

    @Override
    public User findByIdentifier(String identifier) {
        return userRepository.findByUsernameOrEmail(identifier, identifier).orElse(null);
    }

    @Override
    public User findByGoogleId(String googleId) {
        return userRepository.findByGoogleId(googleId).orElse(null);
    }


    @Override
    public boolean checkPassword(User user, String password) {
        return passwordEncoder.matches(password, user.getPassword());
    }

    @Override
    public boolean checkRole(User user, String role){
        return user.getRole().equals(role);
    }

    /*
    @Override
    public boolean checkToken(String googleId, String accessToken){
        User user = findByGoogleId(googleId);
        System.out.println("ACCESSTOKEN: " + accessToken);
        System.out.println("TOKEN: " + user.getToken());
        System.out.println("BOOL: " + user.getToken().equals(accessToken));
        return user.getToken().equals(accessToken);
    }
    */

    @Override
    @Transactional(rollbackOn = Exception.class)
    public Token registerToken(User user) throws Exception {
        cleanTokens(user);

        String tokenString = jwtTools.generateToken(user);
        Token token = new Token(tokenString, user);

        tokenRepository.save(token);

        return token;
    }

    @Override
    public Boolean isTokenValid(User user, String token) {
        try {
            cleanTokens(user);
            List<Token> tokens = tokenRepository.findByUserAndActive(user, true);

            tokens.stream()
                    .filter(tk -> tk.getContent().equals(token))
                    .findAny()
                    .orElseThrow(() -> new Exception());

            return true;
        } catch (Exception e) {
            return false;
        }
    }

    @Override
    @Transactional(rollbackOn = Exception.class)
    public void cleanTokens(User user) throws Exception {
        List<Token> tokens = tokenRepository.findByUserAndActive(user, true);

        tokens.forEach(token -> {
            if (!jwtTools.verifyToken(token.getContent())) {
                token.setActive(false);
                tokenRepository.save(token);
            }
        });


    }

    @Override
    public User findUserAuthenticated() {
        String username = SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName();

        return userRepository.findByUsernameOrEmail(username, username).orElse(null);
    }

    @Override
    @Transactional(rollbackOn = Exception.class)
    public void updatePassword(String identifier, String newPassword){
        User user = findByIdentifier(identifier);
        if (user == null) {
            throw new EntityNotFoundException("User not found with identifier: " + identifier);
        }
        user.setPassword(passwordEncoder.encode(newPassword));
        userRepository.save(user);
    }

}