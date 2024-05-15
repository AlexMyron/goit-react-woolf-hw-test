import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { advertsReducer } from './advertsSlice';
import { favoritesReducer } from './favoritesSlice';

const rootReducer = combineReducers({
  adverts: advertsReducer,
  favorites: favoritesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
