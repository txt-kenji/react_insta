import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import postSlice from "../features/post/postSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    post: postSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export type AppDispatch = typeof store.dispatch;
