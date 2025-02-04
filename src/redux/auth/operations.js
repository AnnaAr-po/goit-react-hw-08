import { createAsyncThunk } from "@reduxjs/toolkit";
import { api, setAuthToken, clearAuthToken } from "../../api";


export const registerThunk = createAsyncThunk("auth/register", async (credentials, thunkAPI) => {
  try {
    const { data } = await api.post("/users/signup", credentials);
    setAuthToken(data.token); 
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});


export const loginThunk = createAsyncThunk("auth/login", async (credentials, thunkAPI) => {
  try {
    const { data } = await api.post("/users/login", credentials);
    setAuthToken(data.token); 
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});


export const logoutThunk = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await api.post("/users/logout");
    clearAuthToken(); 
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});


export const refreshThunk = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const token = state.auth.token;

  if (!token) {
    return thunkAPI.rejectWithValue("No token found");
  }

  setAuthToken(token); 

  try {
    const { data } = await api.get("/users/current");
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});