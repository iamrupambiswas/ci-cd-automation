package dev.rupam.cicdtool.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class UserResponseDTO {
    private String username;
    private String email;
    private String role;
}
