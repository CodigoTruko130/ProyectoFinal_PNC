package com.codigotruko.api.services;


import com.codigotruko.api.domain.dtos.auth.GoogleUserRegisterDTO;
import com.codigotruko.api.domain.dtos.auth.UserRegisterDTO;
import com.codigotruko.api.domain.entities.Token;
import com.codigotruko.api.domain.entities.User;

import java.util.List;
import java.util.UUID;

public interface UserService {
    void create(UserRegisterDTO info);
    void createWithGoogle(GoogleUserRegisterDTO info);

    List<User> findAll();
    User findByUsernameOrEmail(String username, String email);
    User findByIdentifier(String identifier);
    User findByGoogleId(String googleId);

    void deleteById(UUID id);

    void toggleEnable(String username);
    boolean isActive(User username);

    boolean checkPassword(User user, String password);
    boolean checkRole(User user, String role);

    Token registerToken(User user) throws Exception;
    Boolean isTokenValid(User user, String token);
    void cleanTokens(User user) throws Exception;
    User findUserAuthenticated();
    void updatePassword(String identifier, String newPassword);
}

