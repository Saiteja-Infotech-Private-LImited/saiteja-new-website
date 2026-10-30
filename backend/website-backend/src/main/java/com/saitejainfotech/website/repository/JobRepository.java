
package com.saitejainfotech.website.repository;

import com.saitejainfotech.website.entity.Job;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface JobRepository extends JpaRepository<Job, Long> {
    List<Job> findByActiveTrueOrderByCreatedAtDesc();
    List<Job> findAllByOrderByCreatedAtDesc();
}git status