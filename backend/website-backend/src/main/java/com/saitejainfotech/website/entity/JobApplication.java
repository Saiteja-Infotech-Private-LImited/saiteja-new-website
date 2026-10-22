package com.saitejainfotech.website.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "job_applications")
public class JobApplication {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long jobId;
    private String jobTitle;
    private String fullName;
    private String email;
    private String phone;
    private String experience;
    @Column(columnDefinition = "TEXT") private String coverLetter;
    private String resumeOriginalName;
    private String resumeStoredName;
    private LocalDateTime createdAt = LocalDateTime.now();

    public Long getId() { return id; }
    public Long getJobId() { return jobId; }
    public void setJobId(Long jobId) { this.jobId = jobId; }
    public String getJobTitle() { return jobTitle; }
    public void setJobTitle(String jobTitle) { this.jobTitle = jobTitle; }
    public String getFullName() { return fullName; }
    public void setFullName(String fullName) { this.fullName = fullName; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }
    public String getExperience() { return experience; }
    public void setExperience(String experience) { this.experience = experience; }
    public String getCoverLetter() { return coverLetter; }
    public void setCoverLetter(String coverLetter) { this.coverLetter = coverLetter; }
    public String getResumeOriginalName() { return resumeOriginalName; }
    public void setResumeOriginalName(String n) { this.resumeOriginalName = n; }
    public String getResumeStoredName() { return resumeStoredName; }
    public void setResumeStoredName(String n) { this.resumeStoredName = n; }
    public LocalDateTime getCreatedAt() { return createdAt; }
}