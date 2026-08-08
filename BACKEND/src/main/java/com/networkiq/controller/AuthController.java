package com.networkiq.controller;


import com.networkiq.dto.LoginRequest;
import com.networkiq.dto.SignupRequest;
import com.networkiq.dto.UpdateProfileRequest;

import com.networkiq.service.UserService;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.Map;



@RestController
@RequestMapping("/api/auth")
@CrossOrigin(
        origins = "http://localhost:5175"
)
public class AuthController {




    @Autowired
    private UserService userService;







    // SIGNUP ADMIN / USER

    @PostMapping("/signup")
    public String signup(
            @RequestBody SignupRequest request
    ){


        return userService.registerUser(
                request
        );


    }








    // LOGIN

    @PostMapping("/login")
    public Map<String,Object> login(
            @RequestBody LoginRequest request
    ){



        return userService.loginUser(
                request
        );


    }








    // UPDATE PROFILE

    @PutMapping("/profile")
    public String updateProfile(
            @RequestBody UpdateProfileRequest request
    ){


        return userService.updateProfile(
                request
        );


    }







}