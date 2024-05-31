package com.codigotruko.api.domain.entities;

import jakarta.persistence.*;
import lombok.Data;
import java.util.UUID;

@Data
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String token;
    private String googleId;
    private String username;
    private String imageUrl;
    private String email;
    private String password;
    private String rol;
    private Boolean enabled;
}


