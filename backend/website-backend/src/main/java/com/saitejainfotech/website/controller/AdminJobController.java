package com.saitejainfotech.website.controller;

import com.saitejainfotech.website.config.AdminAuth;
import com.saitejainfotech.website.entity.Job;
import com.saitejainfotech.website.entity.JobApplication;
import com.saitejainfotech.website.repository.JobApplicationRepository;
import com.saitejainfotech.website.repository.JobRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/admin")
public class AdminJobController {

    private final JobRepository jobRepository;
    private final JobApplicationRepository applicationRepository;
    private final AdminAuth auth;

    @Value("${app.upload-dir:uploads/resumes}")
    private String uploadDir;

    public AdminJobController(JobRepository j, JobApplicationRepository a, AdminAuth auth) {
        this.jobRepository = j;
        this.applicationRepository = a;
        this.auth = auth;
    }

    @GetMapping("/check")
    public Map<String, String> check(@RequestHeader(value = "X-Admin-Key", required = false) String key) {
        auth.check(key);
        return Map.of("status", "ok");
    }

    @GetMapping("/jobs")
    public List<Job> allJobs(@RequestHeader(value = "X-Admin-Key", required = false) String key) {
        auth.check(key);
        return jobRepository.findAllByOrderByCreatedAtDesc();
    }

    @PostMapping("/jobs")
    public Job create(@RequestHeader(value = "X-Admin-Key", required = false) String key,
                      @Valid @RequestBody Job job) {
        auth.check(key);
        job.setActive(true);
        return jobRepository.save(job);
    }

    @PatchMapping("/jobs/{id}/toggle")
    public Job toggle(@RequestHeader(value = "X-Admin-Key", required = false) String key,
                      @PathVariable Long id) {
        auth.check(key);
        Job job = jobRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Job not found"));
        job.setActive(!job.isActive());
        return jobRepository.save(job);
    }

    @DeleteMapping("/jobs/{id}")
    public Map<String, String> delete(@RequestHeader(value = "X-Admin-Key", required = false) String key,
                                      @PathVariable Long id) {
        auth.check(key);
        jobRepository.deleteById(id);
        return Map.of("message", "Deleted");
    }

    @GetMapping("/applications")
    public List<JobApplication> applications(@RequestHeader(value = "X-Admin-Key", required = false) String key) {
        auth.check(key);
        return applicationRepository.findAllByOrderByCreatedAtDesc();
    }

    @GetMapping("/applications/{id}/resume")
    public ResponseEntity<Resource> resume(@RequestHeader(value = "X-Admin-Key", required = false) String key,
                                           @PathVariable Long id) {
        auth.check(key);
        JobApplication app = applicationRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Not found"));
        Path file = Paths.get(uploadDir).toAbsolutePath().normalize().resolve(app.getResumeStoredName());
        FileSystemResource res = new FileSystemResource(file);
        if (!res.exists()) throw new ResponseStatusException(HttpStatus.NOT_FOUND, "File missing");
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION,
                        ContentDisposition.attachment().filename(app.getResumeOriginalName()).build().toString())
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .body(res);
    }
}