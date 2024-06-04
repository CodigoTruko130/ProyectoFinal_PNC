package com.codigotruko.api.domain.dtos;

import lombok.Data;

@Data
public class ProfileResponseDTO {
    private String username;
    private String email;
    private String rol;
}
