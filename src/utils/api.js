import axios from "axios";

const API_BASE_URL = "https://chemical-michaelina-moiz-aa3e0a3e.koyeb.app";

export const loginUser = async (formData) => {
  return await axios.post(`${API_BASE_URL}/api/v1/login`, formData, {
    withCredentials: true, // Allow cookies
  });
};

export const registerUser = async (formData) => {
  return await axios.post(`${API_BASE_URL}/api/v1/register`, formData, {
    withCredentials: true, // Allow cookies
  });
};

