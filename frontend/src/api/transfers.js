import axios from "axios";


const API = axios.create({

    baseURL:"http://localhost:8080/api/transfers"

});




// ===============================
// GET ALL TRANSFERS
// ===============================

export const getTransfers = () => {

    return API.get("");

};





// ===============================
// ADD NEW TRANSFER
// ===============================

export const addTransfer = (data) => {

    return API.post("",data);

};





// ===============================
// UPDATE TRANSFER
// Approve / Reject / Edit
// ===============================

export const updateTransfer = (id,data) => {

    return API.put(
        `/${id}`,
        data
    );

};





// ===============================
// DELETE TRANSFER
// ===============================

export const deleteTransfer = (id) => {

    return API.delete(
        `/${id}`
    );

};





// ===============================
// GENERATE AI TRANSFER PLAN
// ===============================

export const generateTransferPlan = () => {

    return API.get(
        "/generate"
    );

};





// ===============================
// VIEW TRANSFER AUDIT
// ===============================

export const getTransferAudit = (id) => {

    return API.get(
        `/${id}/audit`
    );

};





// ===============================
// APPROVE TRANSFER ONLY
// (Optional)
// ===============================

export const approveTransfer = (id,data) => {

    return API.put(
        `/${id}`,
        {
            ...data,
            status:"Approved"
        }
    );

};





// ===============================
// REJECT TRANSFER ONLY
// (Optional)
// ===============================

export const rejectTransfer = (id,data) => {

    return API.put(
        `/${id}`,
        {
            ...data,
            status:"Rejected"
        }
    );

};