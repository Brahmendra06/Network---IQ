import axios from "axios";


const API = axios.create({

    baseURL:"http://localhost:8080/api/analytics"

});



export const getCategoryAnalytics = () =>
    API.get("/category");



export const getStateAnalytics = () =>
    API.get("/state");



export const getProductAnalytics = () =>
    API.get("/products");



export const getStockAnalytics = () =>
    API.get("/stock");