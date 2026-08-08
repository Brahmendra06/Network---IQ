package com.networkiq.service;


import com.networkiq.entity.User;
import com.networkiq.repository.UserRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class AuthService {



    @Autowired
    private UserRepository userRepository;





    public User signup(User user){


        if(user.getRole()==null){


            user.setRole("USER");


        }


        return userRepository.save(user);


    }







    public User login(
            String email,
            String password
    ){



        User user =
                userRepository
                        .findByEmail(email)
                        .orElse(null);




        if(user != null &&
                user.getPassword()
                        .equals(password)){


            return user;


        }



        return null;


    }



}