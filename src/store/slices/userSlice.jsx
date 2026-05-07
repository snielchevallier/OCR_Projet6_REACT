import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: null,
  statistics: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo(state, action) {
      console.log(action.payload.profile);
      state.profile = action.payload.profile;
      state.statistics = action.payload.statistics;
    },
    clearUserInfo(state) {
      state.profile = null;
      state.statistics = null;
    },
  },
});

export const { setUserInfo, clearUserInfo } = userSlice.actions;
export default userSlice.reducer;
