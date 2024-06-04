package com.codigotruko.api.controllers;

import com.codigotruko.api.domain.dtos.*;
import com.codigotruko.api.domain.entities.User;
import com.codigotruko.api.services.UserService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;



@RestController
@RequestMapping("/api/user")
public class UserRestController {
    private final UserService userService;

    public UserRestController(UserService userService) {
        this.userService = userService;
    }



    @GetMapping("/{username}")
    public ResponseEntity<GeneralResponse> getProfile(@PathVariable String username) {
        User user = userService.findByIdentifier(username);

        if (user == null || !user.getEnabled()) {
            return GeneralResponse.getResponse(
                    "Error, usuario inactivo");
        }

        ProfileResponseDTO userProfileDTO = new ProfileResponseDTO();
        userProfileDTO.setUsername(user.getUsername());
        userProfileDTO.setEmail(user.getEmail());
        userProfileDTO.setRol(user.getRol());

        return GeneralResponse.getResponse("User found", userProfileDTO);

    }


    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteUser(@RequestBody @Valid UserChangesDTO info) {
        User user = userService.findByIdentifier(info.getUsername());
        if (user == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        userService.deleteById(user.getId());

        return GeneralResponse.getResponse("User Deleted");
    }

    @PatchMapping("/change-password")
    public ResponseEntity<?> updatePassword(@RequestBody @Valid ChangePasswordDTO info) {
        String username = info.getUsername();
        String newPassword = info.getNewPassword();

        User user = userService.findByIdentifier(username);

        if (user == null) {
            return GeneralResponse.getResponse("User not found");
        }

        userService.updatePassword(username, newPassword);

        return GeneralResponse.getResponse("Password Changed");
    }





}
