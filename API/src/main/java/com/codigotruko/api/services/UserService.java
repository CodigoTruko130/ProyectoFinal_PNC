package com.codigotruko.api.services;


import com.codigotruko.api.domain.dtos.GoogleUserRegisterDTO;
import com.codigotruko.api.domain.dtos.UserRegisterDTO;
import com.codigotruko.api.domain.entities.User;

import java.util.List;
import java.util.UUID;

public interface UserService {
    void create(UserRegisterDTO info);
    List<User> findAll();
    User findByUsernameOrEmail(String username, String email);
    User findByIdentifier(String identifier);
    void createWithGoogle(GoogleUserRegisterDTO info);
    void updateToken(User user, String token);
    User findByGoogleId(String googleId);
    void deleteById(UUID id);
    void toggleEnable(String username);
    boolean isEnabled(User username);
    void updatePassword(String username, String newPassword);
    boolean checkPassword(User user, String password);
    boolean checkToken(String googleId, String accessToken);
}

