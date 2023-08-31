import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createUser = createAsyncThunk(
  "User/createUser",
  async (formdata: object, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        "http://localhost:4000/Users",
        formdata
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getUser = createAsyncThunk(
  "User/getUser",
  async (email: string, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `http://localhost:4000/Users?email=${email}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
