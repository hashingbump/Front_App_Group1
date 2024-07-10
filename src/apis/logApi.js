import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/logs",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

export const getDataOnDate = async (date) => {
  try {
    const response = await api.get("/", {
      params: { date },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data on date:", error);
    throw error;
  }
};
