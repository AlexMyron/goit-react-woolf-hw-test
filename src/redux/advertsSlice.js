import { createSlice } from '@reduxjs/toolkit';

import { fetchList } from './operations';

const initialState = {
  advertsList: [],
  filteredAdverts: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};
const handleError = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

const advertSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {
    filterAdvertsList(state, action) {
      state.filteredAdverts = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.advertsList = action.payload;
      state.filteredAdverts = action.payload;
      state.error = null;
    });
    builder.addCase(fetchList.pending, handlePending);
    builder.addCase(fetchList.rejected, handleError);
  },
});

export const { filterAdvertsList } = advertSlice.actions;

export const advertsReducer = advertSlice.reducer;
