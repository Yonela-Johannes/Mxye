import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { musicApi, videoApi } from './services/shazam';

export const store = configureStore({
  reducer: {
    [musicApi.reducerPath]: musicApi.reducer,
    player: playerReducer,
    [videoApi.reducerPath]: videoApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(musicApi.middleware, videoApi.middleware),
});
