import { createAsyncThunk } from "@reduxjs/toolkit";
import { api, setAuthToken } from "../../api";


export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;

      if (!token) {
        return thunkAPI.rejectWithValue("No token found");
      }

      setAuthToken(token); 
      const { data } = await api.get("/contacts");
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


export const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({ name, number }, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;

      if (!token) {
        return thunkAPI.rejectWithValue("No token found");
      }

      setAuthToken(token);
      const { data } = await api.post("/contacts", { name, number });
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;

      if (!token) {
        return thunkAPI.rejectWithValue("No token found");
      }

      setAuthToken(token);
      await api.delete(`/contacts/${id}`);
      return id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);