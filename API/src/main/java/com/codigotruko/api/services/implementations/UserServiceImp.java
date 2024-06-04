package com.codigotruko.api.services.implementations;


import com.codigotruko.api.domain.dtos.GoogleUserRegisterDTO;
import com.codigotruko.api.domain.dtos.UserRegisterDTO;
import com.codigotruko.api.domain.entities.User;
import com.codigotruko.api.mocks.UsersMock;
import com.codigotruko.api.repositories.UserRepository;
import com.codigotruko.api.services.UserService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.*;

@Service
public class UserServiceImp implements UserService {

    private final UserRepository userRepository;

    public UserServiceImp(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    @Transactional(rollbackOn = Exception.class)
    public void create(UserRegisterDTO info){
        User user = new User();
        user.setUsername(info.getUsername());

        user.setPassword(info.getPassword());
        user.setEmail(info.getEmail());
        user.setEnabled(false);
        user.setRol("ROLE_USER");

        userRepository.save(user);
    }

    @Override
    @Transactional(rollbackOn = Exception.class)
    public void createWithGoogle(GoogleUserRegisterDTO info) {
        User newUser = new User();
        newUser.setGoogleId(info.getGoogleId());
        newUser.setToken(info.getAccessToken());
        newUser.setEmail(info.getEmail());
        newUser.setUsername(info.getUsername());
        newUser.setPassword("12345678aA!");
        newUser.setImageUrl(info.getImageUrl());
        newUser.setEnabled(false);
        newUser.setRol("ROLE_USER");
        userRepository.save(newUser);
    }

    @Transactional(rollbackOn = Exception.class)
    public void updateToken(User user, String token) {
        user.setToken(token);
    }

    @Override
    public List<User> findAll() {return userRepository.findAll();}

    @Override
    public void deleteById(UUID id) {
        userRepository.delete(Objects.requireNonNull(userRepository.findById(id).orElse(null)));
    }

    @Override
    public void toggleEnable(String username) {
        User user = userRepository.findByUsernameOrEmail(username, username).orElse(null);
        assert user != null;
        user.setEnabled(!user.getEnabled());
        userRepository.save(user);
    }

    @Override
    public boolean isEnabled(User user) {
        return user.getEnabled();
    }

    @Override
    public void updatePassword(String username, String newPassword) {
        User user = userRepository.findByUsernameOrEmail(username, username).orElse(null);
        assert user != null;
        user.setPassword(newPassword);
        userRepository.save(user);
    }

    @Override
    public User findByUsernameOrEmail(String username, String email){
        return userRepository.findByUsernameOrEmail(username, email).orElse(null);
    }

    @Override
    public User findByIdentifier(String identifier){
        return userRepository.findByUsernameOrEmail(identifier, identifier).orElse(null);
    }

    @Override
    public User findByGoogleId(String googleId){
        return userRepository.findByGoogleId(googleId).orElse(null);
    }


    @Override
    public boolean checkPassword(User user, String password){
        return user.getPassword().equals(password);
    }

    @Override
    public boolean checkToken(String googleId, String accessToken){
        User user = findByGoogleId(googleId);
        System.out.println("ACCESSTOKEN: " + accessToken);
        System.out.println("TOKEN: " + user.getToken());
        System.out.println("BOOL: " + user.getToken().equals(accessToken));
        return user.getToken().equals(accessToken);
    }


}