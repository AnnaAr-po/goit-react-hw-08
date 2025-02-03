import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global";



const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// ✅ Функція для очищення токена
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

// 🔹 Реєстрація користувача
export const registerThunk = createAsyncThunk(
  "auth/register",
  async (credentials, thunkApi) => {
    try {
      const { data } = await axios.post("/users/signup", credentials);
      setAuthHeader(data.token); // ✅ Додаємо токен після реєстрації
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// 🔹 Логін користувача
export const loginThunk = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    try {
      const { data } = await axios.post("/users/login", credentials);
      setAuthHeader(data.token); // ✅ Додаємо токен після логіну
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// 🔹 Вихід користувача
export const logoutThunk = createAsyncThunk("auth/logout", async (_, thunkApi) => {
  try {
    await axios.post("/users/logout");
    clearAuthHeader(); // ✅ Видаляємо токен при виході
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

// 🔹 Оновлення користувача (перевірка токена)
export const refreshThunk = createAsyncThunk("auth/refresh", async (_, thunkApi) => {
  const state = thunkApi.getState();
  const persistedToken = state.auth.token;

  if (!persistedToken) {
    return thunkApi.rejectWithValue("No token found");
  }

  setAuthHeader(persistedToken); // ✅ Встановлюємо токен перед запитом

  try {
    const { data } = await axios.get("/users/current");
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});