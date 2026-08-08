import axios from "axios";


const API = axios.create({

    baseURL:"http://localhost:8080/api/planner"

});



export const getPlannerTasks = () =>
API.get("");



export const addPlannerTask = (data) =>
API.post("",data);



export const updatePlannerStatus = (id,status) =>
API.put(`/${id}?status=${status}`);