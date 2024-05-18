import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { advertsReducer } from './advertsSlice';
import { favoritesReducer } from './favoritesSlice';
import { paginationReducer } from './paginationSlice';

import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favorites'],
};

const rootReducer = combineReducers({
  adverts: advertsReducer,
  favorites: favoritesReducer,
  pagination: paginationReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
