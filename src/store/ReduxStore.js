import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterStore/CounterStoreSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
