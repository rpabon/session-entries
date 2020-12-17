import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import sessionsSlice from './sessionsSlice';

export const store = configureStore({
  reducer: {
    sessions: sessionsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
