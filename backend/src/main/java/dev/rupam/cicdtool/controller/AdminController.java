package dev.rupam.cicdtool.controller;

import dev.rupam.cicdtool.dto.RegisterRequest;
import dev.rupam.cicdtool.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "http://localhost:5173")
public class AdminController {

    @Autowired
    private AuthService authService;

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/register-dev")
    public ResponseEntity<?> registerDeveloper(@RequestBody RegisterRequest req) {
        String message = authService.registerDeveloper(req);
        return ResponseEntity.ok(message);
    }
}