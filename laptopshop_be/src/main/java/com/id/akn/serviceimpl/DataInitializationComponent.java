package com.id.akn.serviceimpl;

import com.id.akn.model.User;
import com.id.akn.repository.UserRepository;
import com.id.akn.service.CartService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;

@Component
@AllArgsConstructor
public class DataInitializationComponent implements CommandLineRunner {

    private final UserRepository userRepository;
    private CartService cartService;
    private PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) {
        try {
            initializeImageFolders();
            initializeAdminUser();
        } catch (IOException e) {
            throw new RuntimeException("Failed to initialize image folders", e);
        }
    }

    private void initializeImageFolders() throws IOException {
        String baseDir = "src/main/resources/static/images/";
        Path imagesDir = Paths.get(baseDir);
        Path laptopDir = Paths.get(baseDir + "laptop/");
        Path homeSlideDir = Paths.get(baseDir + "homeslide/");

        // Tạo thư mục cha và các thư mục con nếu chưa tồn tại
        if (!Files.exists(imagesDir)) {
            Files.createDirectories(imagesDir);
        }
        if (!Files.exists(laptopDir)) {
            Files.createDirectories(laptopDir);
        }
        if (!Files.exists(homeSlideDir)) {
            Files.createDirectories(homeSlideDir);
        }
    }

    private void initializeAdminUser() {
        String adminUsername = "olympic963@gmail.com";

        if (userRepository.findByEmail(adminUsername) == null) {
            User adminUser = new User();

            adminUser.setPassword(passwordEncoder.encode("anacondagb15"));
            adminUser.setName("Nguyễn Anh Tú");
            adminUser.setEmail(adminUsername);
            adminUser.setPhoneNumber("0357851596");
            adminUser.setRole(User.Role.ADMIN);
            adminUser.setCreatedAt(LocalDateTime.now());
            User admin = userRepository.save(adminUser);
            cartService.createCart(admin);
        }
    }
}