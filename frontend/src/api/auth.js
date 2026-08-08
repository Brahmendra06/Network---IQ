import axios from "axios";


const API = axios.create({

    baseURL:"http://localhost:8080/api/auth"

});




// SIGNUP

export const signup = (userData)=>{

    return API.post(
        "/signup",
        userData
    );

};




// LOGIN

export const login = (userData)=>{

    return API.post(
        "/login",
        userData
    );

};




// UPDATE PROFILE

export const updateProfile = (userData)=>{

    return API.put(
        "/profile",
        userData
    );

};