package com.codigotruko.api.controllers;

import com.codigotruko.api.domain.dtos.GeneralResponse;
import com.codigotruko.api.domain.dtos.auth.UserRegisterDTO;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/residence")
public class ResidenceController {

    @PostMapping("/")
    public ResponseEntity<GeneralResponse> createResidence(@RequestBody @Valid UserRegisterDTO info) {

        return GeneralResponse.getResponse(HttpStatus.CREATED, "OK TEST");
    }
}
