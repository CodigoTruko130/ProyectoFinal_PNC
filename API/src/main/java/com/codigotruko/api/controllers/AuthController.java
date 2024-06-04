package com.codigotruko.api.controllers;

import com.codigotruko.api.domain.dtos.*;
import com.codigotruko.api.domain.dtos.auth.GoogleUserLoginDTO;
import com.codigotruko.api.domain.dtos.auth.GoogleUserRegisterDTO;
import com.codigotruko.api.domain.dtos.auth.UserLoginDTO;
import com.codigotruko.api.domain.dtos.auth.UserRegisterDTO;
import com.codigotruko.api.domain.entities.Token;
import com.codigotruko.api.domain.entities.User;
import com.codigotruko.api.services.UserService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
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


    @PostMapping("/login")
    public ResponseEntity<GeneralResponse> login(@RequestBody @Valid UserLoginDTO info, BindingResult validations) throws Exception {
        userService.create(info);
        User user = userService.findByIdentifier(info.getName());
        Token token = userService.registerToken(user);
        return GeneralResponse.getResponse(HttpStatus.OK, new TokenDTO(token));
    }


}
