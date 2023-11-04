import {
  combineReducers,
  configureStore,
  ThunkDispatch,
  Action,
} from '@reduxjs/toolkit';
import luckyCatSlice from './luckyCatSlice';
import diarySlice from './diarySlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const reducers = combineReducers({
  luckyCat: luckyCatSlice.reducer,
  diary: diarySlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['luckyCat', 'diary'],
  // blacklist: []
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

export type ReducerType = ReturnType<typeof reducers>;
export type AppThunkDispatch = ThunkDispatch<ReducerType, any, Action<string>>;
export type AppDispatch = typeof store.dispatch;
export default store;
