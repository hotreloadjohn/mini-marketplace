import { configureStore } from "@reduxjs/toolkit";
// import loginReducer from "./features/loginSlice";
import authReducer from "./features/authSlice";
import messageReducer from "./features/msgSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { loginApi } from "./services/loginApi";

const store = configureStore({
  reducer: {
    // login: loginReducer,
    auth: authReducer,
    message: messageReducer,
    [loginApi.reducerPath]: loginApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loginApi.middleware),
});

setupListeners(store.dispatch);

export default store;
