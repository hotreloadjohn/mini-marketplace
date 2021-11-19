import { configureStore } from "@reduxjs/toolkit";
// import loginReducer from "./features/loginSlice";
import productReducer from "./features/productSlice";
import messageReducer from "./features/msgSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    message: messageReducer,
    product: productReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(loginApi.middleware),
});

setupListeners(store.dispatch);

export default store;
