package dev.rupam.cicdtool.dto;

import dev.rupam.cicdtool.model.Role;
import lombok.Data;

@Data
public class RegisterRequest {
    private String username;
    private String email;
    private String password;
    private Role role;
}