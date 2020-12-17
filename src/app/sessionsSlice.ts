import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { Session } from '../types/Session';

interface SessionsState {
  sessions: Session[];
}

const initialState: SessionsState = {
  sessions: [],
};

export const sessionsSlice = createSlice({
  name: 'sessions',
  initialState,
  reducers: {
    addSession(state, action: PayloadAction<Session>) {
      state.sessions.push(action.payload);
    },
  },
});

export const { addSession } = sessionsSlice.actions;
export const selectSessions = (state: RootState) => state.sessions;
export default sessionsSlice.reducer;
