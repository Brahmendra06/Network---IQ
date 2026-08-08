import axios from "axios";


const API = axios.create({

    baseURL:"http://localhost:8080/api/notifications"

});




// GET ALL NOTIFICATIONS

export const getNotifications = () =>

    API.get("");





// CREATE NOTIFICATION

export const addNotification = (data) =>

    API.post("", data);






// DELETE NOTIFICATION

export const deleteNotification = (id) =>

    API.delete(`/${id}`);







// MARK AS READ

export const markNotificationRead = (id) =>

    API.put(`/${id}/read`);