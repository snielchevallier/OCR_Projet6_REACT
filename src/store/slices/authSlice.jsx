import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { connexionSuccess, connexionFail } from "../../data/connexion";


const authSlice = createSlice({
  name: "auth",
  initialState: {
    userId: null,
    token: null,
    isAuthenticated: false,
    error: null,
  },
  reducers: {
    setCredentials(state, action) {
      state.userId = action.payload.userId;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.error = null;
    },
    logout(state) {
      state.userId = null;
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
    },
    setAuthError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { logout, setCredentials, setAuthError } = authSlice.actions;
export default authSlice.reducer;
