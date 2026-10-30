package com.saitejainfotech.website.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;

@Component
public class AdminAuth {
    @Value("${admin.key:}")
    private String adminKey;

    public void check(String provided) {
        if (adminKey == null || adminKey.isBlank() || provided == null
                || !MessageDigest.isEqual(
                        adminKey.getBytes(StandardCharsets.UTF_8),
                        provided.getBytes(StandardCharsets.UTF_8))) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid admin key");
        }
    }
}