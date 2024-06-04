package com.codigotruko.api.domain.dtos.auth;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

@Data
public class UserLoginDTO {
    private String name;
    private String picture;
    private String email;
}
