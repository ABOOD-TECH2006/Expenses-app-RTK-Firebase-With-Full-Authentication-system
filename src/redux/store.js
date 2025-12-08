import { configureStore, createSlice } from "@reduxjs/toolkit";

// Expenses Slice
const expensesSlice = createSlice({
  name: "expenses",
  initialState: [],
  reducers: {
    addExpense: (state, action) => {
      state.unshift(action.payload); // add to beginning
    },
    deleteExpense: (state, action) => {
      return state.filter((expense) => expense.id !== action.payload);
    },
  },
});

export const { addExpense, deleteExpense } = expensesSlice.actions;
const store = configureStore({
  reducer: {
    expenses: expensesSlice.reducer,
  },
});

export default store;
