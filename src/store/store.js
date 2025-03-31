import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './Slices/productsSlice';
import favouriteReducer from './Slices/favourite';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    sliceFavourite: favouriteReducer
  }
});