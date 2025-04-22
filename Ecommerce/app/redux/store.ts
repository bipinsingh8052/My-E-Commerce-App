// store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import cartReducer from './slice/cart';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

const store = configureStore({
    reducer: {
        cart: persistedReducer,
    },middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
          serializableCheck: {
              ignoredActions: ['persist/PERSIST'], // Ignore persist actions
              ignoredPaths: ['register'], // Ignore specific paths if necessary
          },
      }),
});

export const persistor = persistStore(store);
export default store;
// Optional: Define the RootState and AppDispatch types for use in your components
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;