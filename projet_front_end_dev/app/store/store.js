import { configureStore } from '@reduxjs/toolkit';
import candidatsReducer from './features/candidatsSlice';

const store = configureStore({
  reducer: {
    candidats: candidatsReducer,
  },
});

export default store;