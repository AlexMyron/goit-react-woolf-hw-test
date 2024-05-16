import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { advertsReducer } from './advertsSlice';
import { favoritesReducer } from './favoritesSlice';
import { paginationReducer } from './paginationSlice';

const rootReducer = combineReducers({
  adverts: advertsReducer,
  favorites: favoritesReducer,
  pagination: paginationReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
