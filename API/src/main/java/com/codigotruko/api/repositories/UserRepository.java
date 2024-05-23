package com.codigotruko.api.repositories;

import com.codigotruko.api.domain.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID> {
    Optional<User> findByUsernameOrEmail(String username, String Email);
    Optional<User> findByGoogleId(String googleId);
}

