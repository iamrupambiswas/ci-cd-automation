package dev.rupam.cicdtool.service;

import dev.rupam.cicdtool.dto.*;
import dev.rupam.cicdtool.model.*;
import dev.rupam.cicdtool.repository.UserRepository;
import dev.rupam.cicdtool.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired private UserRepository userRepo;
    @Autowired private PasswordEncoder passwordEncoder;
    @Autowired private JwtUtil jwtUtil;

    public String register(RegisterRequest req) {
        Role role = req.getRole() != null ? req.getRole() : Role.DEVELOPER;
        User user = new User(null, req.getUsername(), req.getEmail(),
                passwordEncoder.encode(req.getPassword()), role);
        userRepo.save(user);
        return "User registered";
    }

    public AuthResponse login(LoginRequest req) {
        User user = userRepo.findByEmail(req.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));
        if (!passwordEncoder.matches(req.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid credentials");
        }
        String token = jwtUtil.generateToken(user.getEmail());
        return new AuthResponse(token);
    }

    public String registerDeveloper(RegisterRequest req) {
        User user = new User(
                null,
                req.getUsername(),
                req.getEmail(),
                passwordEncoder.encode(req.getPassword()),
                Role.DEVELOPER // forcefully assign developer role
        );
        userRepo.save(user);
        return "Developer registered";
    }

}
