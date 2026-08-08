package com.networkiq.service;


import com.networkiq.dto.LoginRequest;
import com.networkiq.dto.SignupRequest;
import com.networkiq.dto.UpdateProfileRequest;

import com.networkiq.entity.User;

import com.networkiq.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.HashMap;
import java.util.Map;
import java.util.Optional;



@Service
public class UserService {



    @Autowired
    private UserRepository userRepository;





    // REGISTER NEW USER

    public String registerUser(SignupRequest request) {



        Optional<User> existingUser =
                userRepository.findByEmail(
                        request.getEmail()
                );



        if(existingUser.isPresent()){

            return "Email already exists!";

        }






        User user = new User();



        user.setName(
                request.getName()
        );



        user.setEmail(
                request.getEmail()
        );



        user.setPassword(
                request.getPassword()
        );





        // SAVE ROLE

        if(request.getRole()==null || request.getRole().isEmpty()){


            user.setRole(
                    "USER"
            );


        }
        else{


            user.setRole(
                    request.getRole().toUpperCase()
            );


        }






        userRepository.save(user);




        return "User Registered Successfully";



    }









    // LOGIN USER


    public Map<String,Object> loginUser(
            LoginRequest request
    ) {



        Optional<User> optionalUser =
                userRepository.findByEmail(
                        request.getEmail()
                );



        Map<String,Object> response =
                new HashMap<>();





        if(optionalUser.isEmpty()){


            response.put(
                    "success",
                    false
            );


            response.put(
                    "message",
                    "User not found!"
            );


            return response;


        }






        User user =
                optionalUser.get();





        if(!user.getPassword()
                .equals(request.getPassword())){


            response.put(
                    "success",
                    false
            );


            response.put(
                    "message",
                    "Invalid Password!"
            );


            return response;


        }







        response.put(
                "success",
                true
        );



        response.put(
                "message",
                "Login Successful"
        );



        response.put(
                "id",
                user.getId()
        );



        response.put(
                "name",
                user.getName()
        );



        response.put(
                "email",
                user.getEmail()
        );



        response.put(
                "role",
                user.getRole()
        );





        return response;



    }









    // UPDATE PROFILE


    public String updateProfile(
            UpdateProfileRequest request
    ) {



        Optional<User> optionalUser =
                userRepository.findById(
                        request.getId()
                );



        if(optionalUser.isEmpty()){


            return "User not found!";


        }





        User user =
                optionalUser.get();





        user.setName(
                request.getName()
        );



        userRepository.save(user);




        return "Profile Updated Successfully";



    }




}