import { configureStore } from "@reduxjs/toolkit";
import linksReducer from "./linkSlice";
import profileReducer from "./profileSlice";

export const store = configureStore({
  reducer: {
    links: linksReducer,
    profile: profileReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
