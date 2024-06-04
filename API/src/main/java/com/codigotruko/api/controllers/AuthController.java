package com.codigotruko.api.controllers;

import com.codigotruko.api.domain.dtos.*;
import com.codigotruko.api.domain.entities.User;
import com.codigotruko.api.services.UserService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }


    @PostMapping("/register")
    public ResponseEntity<GeneralResponse> register(@RequestBody @Valid UserRegisterDTO info){

        User user = userService.findByUsernameOrEmail(info.getUsername(), info.getEmail());
        if(user != null){
            return GeneralResponse.getResponse(HttpStatus.CONFLICT, "User already exists");
        }

        userService.create(info);
        return GeneralResponse.getResponse(HttpStatus.CREATED, "User registered successfully");
    }

    @PostMapping("/register-google")
    public ResponseEntity<GeneralResponse> registerWithGoogle(@RequestBody @Valid GoogleUserRegisterDTO info){

        User user = userService.findByUsernameOrEmail(info.getUsername(), info.getEmail());
        if(user != null){
            return GeneralResponse.getResponse(HttpStatus.CONFLICT, "User already exists");
        }

        userService.createWithGoogle(info);
        return GeneralResponse.getResponse(HttpStatus.CREATED, "User registered successfully");
    }


    @PostMapping("/login")
    public ResponseEntity<GeneralResponse> login(@RequestBody @Valid UserLoginDTO info){
        User user = userService.findByIdentifier(info.getIdentifier());
        if(user == null){
            return GeneralResponse.getResponse(HttpStatus.CONFLICT, "User not found");
        }

        if(!userService.checkPassword(user, info.getPassword()) && userService.isEnabled(user)){
            return GeneralResponse.getResponse(HttpStatus.NOT_FOUND, "User not found");
        }

        return GeneralResponse.getResponse(HttpStatus.OK, "User logged in successfully");

    }

    @PostMapping("/login-google")
    public ResponseEntity<GeneralResponse> loginWithGoogle(@RequestBody @Valid GoogleUserLoginDTO info){
        User user = userService.findByGoogleId(info.getGoogleId());
        if(user == null){
            return GeneralResponse.getResponse(HttpStatus.CONFLICT, "User not found");
        }

        if(!userService.isEnabled(user) ){
            return GeneralResponse.getResponse(HttpStatus.NOT_FOUND, "User not found");
        }

        userService.updateToken(user, info.getAccessToken());

        return GeneralResponse.getResponse(HttpStatus.OK, "User logged in successfully");

    }


/*
    @PostMapping("/register-google")
    public ResponseEntity<GeneralResponse> registerWithGoogle(@RequestBody @Valid GoogleUserRegisterDTO info) {
        User user = userService.findByGoogleId(info.getGoogleId());
        if (user != null) {
            return GeneralResponse.getResponse(HttpStatus.CONFLICT, "User already exists");
        }

        userService.createWithGoogle(info);
        return GeneralResponse.getResponse(HttpStatus.CREATED, "User registered successfully using Google");
    }
*
*
* */
}
