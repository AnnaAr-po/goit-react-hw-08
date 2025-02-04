import axios from "axios";

export const api = axios.create({
  baseURL: "https://connections-api.goit.global",
});

export const setAuthToken = (token) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const clearAuthToken = () => {
  delete api.defaults.headers.common["Authorization"];
};