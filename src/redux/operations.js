import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchList = createAsyncThunk(
  'advert/fetchList',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/adverts');
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);