package com.networkiq.repository;


import com.networkiq.entity.AILog;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface AILogRepository extends JpaRepository<AILog, Long> {


}