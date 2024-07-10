import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/restaurants",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

export const getAllRestaurants = async () => {
  try {
    const response = await api.get("/");
    return response.data;
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    throw error;
  }
};

export const getRestaurantById = async (id) => {
  try {
    const response = await api.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching restaurant:", error);
    throw error;
  }
};

export const createRestaurant = async (restaurantData) => {
  try {
    const response = await api.post("/", restaurantData);
    return response.data;
  } catch (error) {
    console.error("Error creating restaurant:", error);
    throw error;
  }
};

export const updateRestaurantById = async (id, restaurantData) => {
  try {
    const response = await api.put(`/${id}`, restaurantData);
    return response.data;
  } catch (error) {
    console.error("Error updating restaurant:", error);
    throw error;
  }
};

export const deleteRestaurantById = async (id) => {
  try {
    const response = await api.delete(`/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting restaurant:", error);
    throw error;
  }
};
