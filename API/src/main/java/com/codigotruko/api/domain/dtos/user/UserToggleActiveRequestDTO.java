package com.codigotruko.api.domain.dtos.user;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class UserToggleActiveRequestDTO {
    @NotBlank
    private String identifier;
}
