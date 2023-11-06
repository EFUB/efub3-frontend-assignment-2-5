import { combineReducers, configureStore } from "@reduxjs/toolkit";

import likeSlice from "./likeSlice";
import cartSlice from "./cartSlice";

import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

const reducers = combineReducers({
  like: likeSlice.reducer,
  cart: cartSlice.reducer,
});

// Redux 스토어의 전체 상태를 나타내는 타입 RootState 정의
export type RootState = ReturnType<typeof reducers>;

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["like", "cart"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
