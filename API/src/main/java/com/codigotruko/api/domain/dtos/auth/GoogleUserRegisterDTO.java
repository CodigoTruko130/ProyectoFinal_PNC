package com.codigotruko.api.domain.dtos.auth;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class GoogleUserRegisterDTO {

    @NotBlank(message = "El token de Google no puede estar vacío")
    private String accessToken;

    @NotBlank(message = "El ID de Google no puede estar vacío")
    private String googleId;

    @NotBlank(message = "El correo electrónico no puede estar vacío")
    @Email(message = "El correo electrónico debe tener un formato válido")
    private String email;

    @NotBlank(message = "El nombre no puede estar vacío")
    private String username;

    private String imageUrl;
}