import { configureStore } from "@reduxjs/toolkit";
// import loginReducer from "./features/loginSlice";
import productReducer from "./features/productSlice";
import messageReducer from "./features/msgSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

import { api } from "./services/authApi";
import authReducer from "./features/authSlice";

const store = configureStore({
  reducer: {
    message: messageReducer,
    product: productReducer,
    [api.reducerPath]: api.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);

export default store;
