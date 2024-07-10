import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/tables",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

export const getAllTables = async () => {
  try {
    const response = await api.get("/");
    return response.data;
  } catch (error) {
    console.error("Error fetching tables:", error);
    throw error;
  }
};

export const getTableById = async (id) => {
  try {
    const response = await api.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching table by id:", error);
    throw error;
  }
};

export const createTable = async (tableData) => {
  try {
    const response = await api.post("/", tableData);
    return response.data;
  } catch (error) {
    console.error("Error creating table:", error);
    throw error;
  }
};

export const updateTableById = async (id, tableData) => {
  try {
    const response = await api.put(`/${id}`, tableData);
    return response.data;
  } catch (error) {
    console.error("Error updating table:", error);
    throw error;
  }
};

export const deleteTableById = async (id) => {
  try {
    const response = await api.delete(`/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting table:", error);
    throw error;
  }
};
