import { configureStore } from "@reduxjs/toolkit";
import poketReducer from "../reducer/poketReducer";

export const store = configureStore({
  reducer: { poketReducer },
});
