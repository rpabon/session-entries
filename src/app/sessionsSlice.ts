import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { Session } from '../types/Session';

export const sessionsSlice = createSlice({
  name: 'sessions',
  initialState: [] as Session[],
  reducers: {
    addSession(state, { payload }: PayloadAction<Session>) {
      const index = state.findIndex((session) => session.id === payload.id);

      if (index >= 0) {
        state.splice(index, 1, payload);
      } else {
        state.push(payload);
      }
    },
  },
});

export const { addSession } = sessionsSlice.actions;
export const selectSessions = (state: RootState) => state.sessions;
export default sessionsSlice.reducer;
