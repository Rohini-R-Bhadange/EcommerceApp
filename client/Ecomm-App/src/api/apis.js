import axios from "axios";

const BASE = import.meta.env.VITE_BACKEND_URL + "/api";

// AUTH
export const Login = (data) =>
  axios.post(`${BASE}/auth/login`, data).then(res => res.data);

export const Register = (data) =>
  axios.post(`${BASE}/auth/register`, data).then(res => res.data);

// PRODUCTS
export const fetchProducts = () =>
  axios.get(`${BASE}/products`).then(res => res.data);

export const createProduct = (data) =>
  axios.post(`${BASE}/products/create`, data).then(res => res.data);

// USERS (ADMIN)
export const fetchUsers = () =>
  axios.get(`${BASE}/users`).then(res => res.data);

export const addUser = (data) =>
  axios.post(`${BASE}/users`, data).then(res => res.data);

export const deleteUser = (id) =>
  axios.delete(`${BASE}/users/${id}`);

// ================= ORDERS =================
export const createOrder = (data) =>
  axios.post(`${BASE}/orders`, data).then(res => res.data);

export const fetchOrders = () =>
  axios.get(`${BASE}/orders`).then(res => res.data);

