package dev.rupam.cicdtool.controller;

import dev.rupam.cicdtool.dto.UserResponseDTO;
import dev.rupam.cicdtool.model.User;
import dev.rupam.cicdtool.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/me")
    public UserResponseDTO getCurrentUser(@AuthenticationPrincipal UserDetails userDetails) {
        User user = userRepository.findByEmail(userDetails.getUsername()).orElseThrow();
        return new UserResponseDTO(
                user.getUsername(),
                user.getEmail(),
                user.getRole().name()  // Convert enum to string
        );
    }
}
