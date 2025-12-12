// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import expensesReducer from "./expensesSlice"; // your existing expenses slice
import authReducer from "./expensesSlice"; // auth slice (we'll create separately)

export const store = configureStore({
  reducer: {
    expenses: expensesReducer,
    auth: authReducer, // keep this here, ready for auth slice
  },
});

export default store;
