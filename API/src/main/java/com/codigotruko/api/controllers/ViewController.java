package com.codigotruko.api.controllers;

import com.codigotruko.api.domain.dtos.user.UserProfileResponseDTO;
import com.codigotruko.api.domain.entities.User;
import com.codigotruko.api.services.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@Slf4j
@RequestMapping("/view")
public class ViewController {
    private final UserService userService;

    public ViewController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/all")
    public String getAllUsers(Model model){
        model.addAttribute("users", userService.findAll());
        return "user-list";
    }

    @GetMapping("/register")
    public String registerUser(){
        return "register";
    }

    @GetMapping("/login")
    public String loginUser(){
        return "login";
    }

    @GetMapping("/profile/{username}")
    public String profileUser(@PathVariable String username, Model model) {
        User user = userService.findByIdentifier(username);

        if (user == null || !user.getActive()) {
            return "the-error";
        }
        UserProfileResponseDTO userProfileDTO = new UserProfileResponseDTO();
        userProfileDTO.setUsername(user.getUsername());
        userProfileDTO.setEmail(user.getEmail());
        userProfileDTO.setRol(user.getRole());
        model.addAttribute("user", userProfileDTO);
        return "main-profile";
    }


    @GetMapping("/rest")
    public String mainRest(Model model){
        model.addAttribute("users", userService.findAll());

        return "mainRest";
    }
}
