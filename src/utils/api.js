import axios from "axios";

const API = axios.create({
  baseURL: "https://amazing-karita-moiz-2205710f.koyeb.app/api/v1",
  withCredentials: true,
});

export const registerUser = (data) => API.post("/register", data);
export const loginUser = (data) => API.post("/login", data);
export const logoutUser = () => API.post("/logout");
export const fetchUserData = () => API.get("/userdata");
