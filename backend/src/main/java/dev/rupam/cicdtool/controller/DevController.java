package dev.rupam.cicdtool.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/dev")
public class DevController {

    @GetMapping("/hello")
    public String hello() {
        return "Hello, Developer! You have access.";
    }
}
