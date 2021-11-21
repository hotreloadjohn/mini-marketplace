import { configureStore } from "@reduxjs/toolkit";
// import loginReducer from "./features/loginSlice";
import productReducer from "./features/productSlice";
import messageReducer from "./features/msgSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

import { api } from "./services/authApi";
import { productApi } from "./services/productApi";
import authReducer from "./features/authSlice";

const store = configureStore({
  reducer: {
    message: messageReducer,
    product: productReducer,
    auth: authReducer,
    [api.reducerPath]: api.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware, productApi.middleware),
});

setupListeners(store.dispatch);

export default store;
