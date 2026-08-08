package com.networkiq.repository;


import com.networkiq.entity.PlannerTask;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface PlannerRepository
        extends JpaRepository<PlannerTask,Long>{


}