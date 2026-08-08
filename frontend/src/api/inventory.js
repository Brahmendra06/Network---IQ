import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api/inventory",
});

// Get all inventory
export const getInventory = async () => {
  return API.get("");
};

// Add inventory
export const addInventory = async (data) => {
  return API.post("", data);
};

// Update inventory
export const updateInventory = async (id, data) => {
  return API.put(`/${id}`, data);
};

// Delete inventory
export const deleteInventory = async (id) => {
  return API.delete(`/${id}`);
};

// Get inventory by ID
export const getInventoryById = async (id) => {
  return API.get(`/${id}`);
};