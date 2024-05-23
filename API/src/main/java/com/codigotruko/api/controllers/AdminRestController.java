package com.codigotruko.api.controllers;

import com.codigotruko.api.domain.dtos.GeneralResponse;
import com.codigotruko.api.domain.dtos.UserChangesDTO;
import com.codigotruko.api.domain.entities.User;
import com.codigotruko.api.services.UserService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
public class AdminRestController {
    private final UserService userService;

    public AdminRestController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/all")
    public ResponseEntity<GeneralResponse> findAll() {
        return GeneralResponse.getResponse("User list found", userService.findAll());
    }

    @PatchMapping("/toggle-active")
    public ResponseEntity<?> toggleActive(@RequestBody @Valid UserChangesDTO info) {
        String username = info.getUsername();

        User user = userService.findByIdentifier(username);

        if (user == null) {
            return ResponseEntity.notFound().build();
        }

        userService.toggleEnable(username);

        return GeneralResponse.getResponse("Toggle Active");
    }

}
