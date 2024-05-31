package com.codigotruko.api.repositories;

import com.codigotruko.api.domain.entities.Token;
import com.codigotruko.api.domain.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface TokenRepository extends JpaRepository<Token, UUID> {
    List<Token> findByUserAndActive(User user, Boolean active);
}