import axios from "axios";

const API_BASE_URL = "https://amazing-karita-moiz-2205710f.koyeb.app";

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

