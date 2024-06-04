package com.codigotruko.api.domain.dtos;

import com.codigotruko.api.domain.entities.Token;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class TokenDTO {
    private String token;
    public TokenDTO(Token token){
        this.token = token.getContent();
    }
}
