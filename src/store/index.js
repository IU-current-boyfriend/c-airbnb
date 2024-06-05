import { configureStore } from "@reduxjs/toolkit";
import homeSlice from './modules/home';
import entireSlice from './modules/entires';

const store = configureStore({
  reducer: {
    home: homeSlice,
    entires: entireSlice,
  }
});

export default store;