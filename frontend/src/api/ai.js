import axios from "axios";


const API = axios.create({

    baseURL:"http://localhost:8080/api/ai"

});



export const getAIAgents = () =>
API.get("/agents");



export const getAILogs = () =>
API.get("/logs");




// REAL TIME AI

export const runStockAI = () =>
API.post("/run/stock");



export const runDemandAI = () =>
API.post("/run/demand");



export const runTransferAI = () =>
API.post("/run/transfer");




// CLEAR ALL AI LOGS

export const clearAILogs = () =>
API.delete("/logs");