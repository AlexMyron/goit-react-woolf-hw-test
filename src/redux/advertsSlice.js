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
    // builder.addCase(addContact.fulfilled, (state, action) => {
    //   state.items.push(action.payload);
    //   state.isLoading = false;
    // });
    // builder.addCase(deleteContact.fulfilled, (state, action) => {
    //   const idx = state.items.findIndex(({ id }) => id === action.payload);
    //   state.items.splice(idx, 1);
    //   state.isLoading = false;
    //   state.error = null;
    // });
    builder.addCase(fetchList.pending, handlePending);
    builder.addCase(fetchList.rejected, handleError);
    // builder.addCase(addContact.pending, handlePending);
    // builder.addCase(addContact.rejected, handleError);
    // builder.addCase(deleteContact.pending, handlePending);
    // builder.addCase(deleteContact.rejected, handleError);
  },
});

export const { filterAdvertsList } = advertSlice.actions;

export const advertsReducer = advertSlice.reducer;
