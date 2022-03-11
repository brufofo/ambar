import { configureStore } from '@reduxjs/toolkit';
import cityReducer from './citySlice';
import targetCity from './targetSlice';

export default configureStore({
  reducer: {
    city: cityReducer
    // target: targetCity
  }
});
