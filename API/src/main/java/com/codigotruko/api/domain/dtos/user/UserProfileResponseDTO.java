package com.codigotruko.api.domain.dtos.user;

import lombok.Data;

@Data
public class UserProfileResponseDTO {
    private String username;
    private String email;
    private String rol;
}
