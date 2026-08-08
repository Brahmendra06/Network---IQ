import axios from "axios";


const API = axios.create({

    baseURL:"http://localhost:8080/api/settings"

});



// GET SETTINGS

export const getSettings = () => {

    return API.get("");

};



// SAVE SETTINGS

export const saveSettings = (data) => {

    return API.post("", data);

};