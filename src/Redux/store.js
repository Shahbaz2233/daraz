
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist';
import cartSlice from './Reducer/Reducer'

const persistConfig = {
  key: 'root',
  version: 1,
  storage
}

const persistedReducer = persistReducer(persistConfig, cartSlice)

const store = configureStore({
  reducer: {
    cart: persistedReducer,
  },
});


export default store;