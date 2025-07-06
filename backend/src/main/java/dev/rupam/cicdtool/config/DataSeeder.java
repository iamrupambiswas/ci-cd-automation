package dev.rupam.cicdtool.config;

import dev.rupam.cicdtool.model.Role;
import dev.rupam.cicdtool.model.User;
import dev.rupam.cicdtool.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class DataSeeder {

    private static final Logger logger = LoggerFactory.getLogger(DataSeeder.class);

    @Value("${app.admin.email}")
    private String adminEmail;

    @Value("${app.admin.username}")
    private String adminUsername;

    @Value("${app.admin.password}")
    private String adminPassword;

    @Bean
    CommandLineRunner seedAdmin(UserRepository userRepo, PasswordEncoder encoder) {
        return args -> {
            if (userRepo.findByEmail(adminEmail).isEmpty()) {
                User admin = new User(
                        null,
                        adminUsername,
                        adminEmail,
                        encoder.encode(adminPassword),
                        Role.ADMIN
                );
                userRepo.save(admin);
                logger.info("Default admin account created: {} / {}", adminEmail, adminPassword);
            } else {
                logger.info("Admin account already exists.");
            }
        };
    }
}
