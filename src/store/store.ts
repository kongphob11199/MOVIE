import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import ThemeReducer from "./slices/ThemeSlices";
import PagesReducer from "./slices/PagesSlices";
import MoviesReducer from "./slices/MovieSlices";

const reducer = {
  ThemeReducer,
  PagesReducer,
  MoviesReducer,
};

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV === "development",
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
