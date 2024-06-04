package com.codigotruko.api.controllers;

import com.codigotruko.api.domain.dtos.*;
import com.codigotruko.api.domain.dtos.user.*;
import com.codigotruko.api.domain.entities.User;
import com.codigotruko.api.services.UserService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/user")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/all")
    public ResponseEntity<GeneralResponse> findAll(@AuthenticationPrincipal User user) {
        if(!userService.checkRole(user, "ROLE_ADMIN")){
            return GeneralResponse.getResponse(HttpStatus.UNAUTHORIZED, "You do not have permission to do this");
        }
        return GeneralResponse.getResponse("User list found", userService.findAll());
    }

    @PatchMapping("/toggle-active")
    public ResponseEntity<?> toggleActive(@AuthenticationPrincipal User user, @RequestBody @Valid UserToggleActiveRequestDTO info) {

        if(!userService.checkRole(user, "ROLE_ADMIN")){
            return GeneralResponse.getResponse(HttpStatus.UNAUTHORIZED, "You do not have permission to do this");
        }

        User userObjective = userService.findByIdentifier(info.getIdentifier());

        if (user == null) {
            return GeneralResponse.getResponse("Toggle Active");
        }

        userService.toggleEnable(userObjective.getUsername());

        return GeneralResponse.getResponse("Toggle Active");
    }

    @GetMapping("/{username}")
    public ResponseEntity<GeneralResponse> getProfile(@AuthenticationPrincipal User user, @PathVariable String username) {
        User userObjective = userService.findByIdentifier(username);

        if (user == null || !user.getActive()) {
            return GeneralResponse.getResponse(HttpStatus.NOT_FOUND, "User not found");
        }

        if(user.getUsername().equals(userObjective.getUsername())){
            UserOwnerProfileResponseDTO userProfileDTO = new UserOwnerProfileResponseDTO();
            userProfileDTO.setUsername(user.getUsername());
            userProfileDTO.setEmail(user.getEmail());
            userProfileDTO.setRol(user.getRole());
            return GeneralResponse.getResponse("User found", userProfileDTO);
        }
        else{
            UserProfileResponseDTO userProfileDTO = new UserProfileResponseDTO();
            userProfileDTO.setUsername(userObjective.getUsername());
            userProfileDTO.setEmail(userObjective.getEmail());

            return GeneralResponse.getResponse("User found", userProfileDTO);
        }

    }


    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteUser(@AuthenticationPrincipal User user, @RequestBody @Valid UserDeleteRequestDTO info) {

        if(!userService.checkRole(user, "ROLE_ADMIN") || user.getUsername().equals(info.getUsername())){
            return GeneralResponse.getResponse(HttpStatus.UNAUTHORIZED, "You do not have permission to do this");
        }

        User userObjective = userService.findByIdentifier(info.getUsername());

        if (userObjective == null) {
            return GeneralResponse.getResponse(HttpStatus.NOT_FOUND, "User not found");
        }

        userService.deleteById(userObjective.getId());

        return GeneralResponse.getResponse("User Deleted");
    }

    @PatchMapping("/change-password")
    public ResponseEntity<?> changePassword(@AuthenticationPrincipal User user, @RequestBody UserUpdatePasswordRequestDTO request) {
        if (!userService.checkPassword(user, request.getOldPassword())) {
            return GeneralResponse.getResponse(HttpStatus.CONFLICT, "Current password is incorrect");
        }

        try {
            userService.updatePassword(user.getEmail(), request.getNewPassword());
            return GeneralResponse.getResponse(HttpStatus.OK, "Password changed successfully");
        } catch (Exception e) {
            return GeneralResponse.getResponse(HttpStatus.EXPECTATION_FAILED, "Could not update password");
        }
    }





}
