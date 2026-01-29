import axios from "axios";

const BASE_URL = "http://localhost:3000/api/auth";

export const Login = async (data) => {
  const response = await axios.post(`${BASE_URL}/login`, data);
  return response.data;
};

export const Register = async (data) => {
  const response = await axios.post(`${BASE_URL}/register`, data);
  return response.data;
};
