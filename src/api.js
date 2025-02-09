import axios from "axios";

export const api = axios.create({
  baseURL: "https://connections-api.goit.global/",
  headers: {
    "Content-Type": "application/json",
     "Accept": "application/json",
  },
});

export const setAuthToken = (token) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const clearAuthToken = () => {
  delete api.defaults.headers.common["Authorization"];
};