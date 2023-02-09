import {configureStore} from '@reduxjs/toolkit';
import {endpoints} from './endpoints/endpoint';

export const store = configureStore({
  reducer: {
    [endpoints.reducerPath]: endpoints.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(endpoints.middleware),
});
