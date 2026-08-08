package com.networkiq.repository;


import com.networkiq.entity.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import java.util.Optional;



@Repository
public interface UserRepository
        extends JpaRepository<User, Long> {



    // FIND USER BY EMAIL FOR LOGIN

    Optional<User> findByEmail(
            String email
    );



    // OPTIONAL: CHECK EMAIL ALREADY EXISTS DURING SIGNUP

    boolean existsByEmail(
            String email
    );


}