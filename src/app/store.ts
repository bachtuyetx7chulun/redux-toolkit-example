import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import rootReducer from "../features/root/root.reducer";
import { settingApi } from "../features/setting/settingApi";

export const store = configureStore({
  reducer: {
    [settingApi.reducerPath]: settingApi.reducer,
    ...rootReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(settingApi.middleware),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
