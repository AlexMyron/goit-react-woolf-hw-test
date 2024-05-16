import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://6642545e3d66a67b34370b8e.mockapi.io/adverts';

export const fetchList = createAsyncThunk(
  'advert/fetchList',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/');
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);