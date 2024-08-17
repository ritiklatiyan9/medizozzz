import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Features/todo/todoSlice"; // Import the todoReducer

export const store = configureStore({
  reducer: {
    MedicalSlice: todoReducer, // Add the todoReducer to the store configuration
  },
});
