import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/menus",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

export const createMenuItem = async (menuItemData) => {
  try {
    const response = await api.post("/", menuItemData);
    return response.data;
  } catch (error) {
    console.error("Error creating menu item:", error);
    throw error;
  }
};

export const getAllMenuItems = async () => {
  try {
    const response = await api.get("/");
    return response.data;
  } catch (error) {
    console.error("Error fetching menu items:", error);
    throw error;
  }
};

export const getMenuItemById = async (id) => {
  try {
    const response = await api.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching menu item:", error);
    throw error;
  }
};

export const updateMenuItemById = async (id, menuItemData) => {
  try {
    const response = await api.put(`/${id}`, menuItemData);
    return response.data;
  } catch (error) {
    console.error("Error updating menu item:", error);
    throw error;
  }
};

export const deleteMenuItemById = async (id) => {
  try {
    const response = await api.delete(`/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting menu item:", error);
    throw error;
  }
};
