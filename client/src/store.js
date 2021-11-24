import { configureStore } from "@reduxjs/toolkit";
// import loginReducer from "./features/loginSlice";
import productReducer from "./features/productSlice";
import messageReducer from "./features/msgSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

import { api } from "./services/authApi";
import { productApi } from "./services/productApi";
import authReducer from "./features/authSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    message: messageReducer,
    product: productReducer,
    auth: persistedReducer,
    [api.reducerPath]: api.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware, productApi.middleware),
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(api.middleware, productApi.middleware),
});

setupListeners(store.dispatch);
let persistor = persistStore(store);

export { store, persistor };
