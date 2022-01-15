import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

// Users API Calls
export const registerAPI = (formData) =>
  API.post("/api/users/register", formData);
export const loginAPI = (formData) => API.post("/api/users/login", formData);
export const userUpdateAPI = (data) => API.patch("/api/users/update", data);
export const userAddressCreateAPI = (data) =>
  API.post("/api/users/address", data);
export const getUserAddressDataAPI = (id) =>
  API.get(`/api/users/address/${id}`);
export const getAddressByIdAPI = (id) => API.get(`api/users/address-id/${id}`);

// Products API Calls
export const createProductAPI = (data) =>
  API.post("/api/products/create", data);
export const fetchProducts = () => API.get("/api/products");
export const fetchProduct = (id) => API.get(`/api/products/${id}`);
export const updateProductAPI = (data) =>
  API.patch("/api/products/update", data);

// categories API Calls
export const createCategory = (data) => API.post("/api/category/create", data);
export const getCategories = () => API.get("/api/category");
export const getCategory = (id) => API.get(`api/category/${id}`);
export const updateCategoryAPI = (data) =>
  API.patch("/api/category/update", data);

// Orders APIs
export const createOrderAPI = (data) => API.post("/api/orders/create", data);
export const getUserOrdersAPI = (id) => API.get(`/api/orders/${id}`);
export const getOrderDetailsAPI = (id) => API.get(`/api/orders/details/${id}`);
