import { configureStore } from '@reduxjs/toolkit';
import testimonialsReducer from './testimonialsSlice';

export const store = configureStore({
  reducer: {
    testimonials: testimonialsReducer
  }
});