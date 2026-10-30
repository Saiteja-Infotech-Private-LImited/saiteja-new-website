package com.saitejainfotech.website.controller;

import com.saitejainfotech.website.entity.Job;
import com.saitejainfotech.website.entity.JobApplication;
import com.saitejainfotech.website.repository.JobApplicationRepository;
import com.saitejainfotech.website.repository.JobRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;
import java.nio.file.*;
import java.util.*;

@RestController
@RequestMapping("/api/jobs")
public class JobController {

    private static final Set<String> ALLOWED_EXT = Set.of("pdf", "doc", "docx");
    private static final long MAX_SIZE = 5L * 1024 * 1024;

    private final JobRepository jobRepository;
    private final JobApplicationRepository applicationRepository;

    @Value("${app.upload-dir:uploads/resumes}")
    private String uploadDir;

    public JobController(JobRepository jobRepository, JobApplicationRepository applicationRepository) {
        this.jobRepository = jobRepository;
        this.applicationRepository = applicationRepository;
    }

    @GetMapping
    public List<Job> list() {
        return jobRepository.findByActiveTrueOrderByCreatedAtDesc();
    }

    @GetMapping("/{id}")
    public Job get(@PathVariable Long id) {
        Job job = jobRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Job not found"));
        if (!job.isActive()) throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Job not found");
        return job;
    }

    @PostMapping(value = "/{id}/apply", consumes = "multipart/form-data")
    public Map<String, String> apply(
            @PathVariable Long id,
            @RequestParam String fullName,
            @RequestParam String email,
            @RequestParam String phone,
            @RequestParam(required = false) String experience,
            @RequestParam(required = false) String coverLetter,
            @RequestParam("resume") MultipartFile resume) throws IOException {

        Job job = jobRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Job not found"));
        if (!job.isActive()) throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "This job is closed");

        if (fullName.isBlank() || email.isBlank() || phone.isBlank())
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Name, email and phone are required");
        if (!email.matches("^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$"))
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid email");
        if (resume.isEmpty())
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Resume is required");
        if (resume.getSize() > MAX_SIZE)
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Resume must be under 5MB");

        String original = Optional.ofNullable(resume.getOriginalFilename()).orElse("resume");
        String ext = original.contains(".")
                ? original.substring(original.lastIndexOf('.') + 1).toLowerCase() : "";
        if (!ALLOWED_EXT.contains(ext))
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Only PDF, DOC or DOCX allowed");

        Path dir = Paths.get(uploadDir).toAbsolutePath().normalize();
        Files.createDirectories(dir);
        String stored = UUID.randomUUID() + "." + ext;
        Files.copy(resume.getInputStream(), dir.resolve(stored), StandardCopyOption.REPLACE_EXISTING);

        JobApplication app = new JobApplication();
        app.setJobId(job.getId());
        app.setJobTitle(job.getTitle());
        app.setFullName(fullName.trim());
        app.setEmail(email.trim());
        app.setPhone(phone.trim());
        app.setExperience(experience);
        app.setCoverLetter(coverLetter);
        app.setResumeOriginalName(original);
        app.setResumeStoredName(stored);
        applicationRepository.save(app);

        return Map.of("message", "Application submitted successfully");
    }
}