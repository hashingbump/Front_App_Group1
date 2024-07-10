import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/orders",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

export const getAllOrders = async () => {
  try {
    const response = await api.get("/");
    return response.data;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error;
  }
};

export const getOrderById = async (id) => {
  try {
    const response = await api.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching order by id:", error);
    throw error;
  }
};

export const createOrder = async (orderData) => {
  try {
    const response = await api.post("/", orderData);
    return response.data;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};

export const updateOrderById = async (id, orderData) => {
  try {
    const response = await api.put(`/${id}`, orderData);
    return response.data;
  } catch (error) {
    console.error("Error updating order:", error);
    throw error;
  }
};

export const deleteOrderById = async (id) => {
  try {
    const response = await api.delete(`/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting order:", error);
    throw error;
  }
};
