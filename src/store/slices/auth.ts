import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  loggedIn: boolean;
}

const initialState: AuthState = {
  loggedIn: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn(state) {
      state.loggedIn = true;
    },
    logOut(state) {
      state.loggedIn = false;
    }
  }
});

export const { logIn, logOut } = authSlice.actions;

export default authSlice.reducer;
