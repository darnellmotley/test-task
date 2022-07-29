import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";

const combinedReducer = combineReducers({
  data: dataSlice,
});

export const store = configureStore({
  reducer: combinedReducer,
});
