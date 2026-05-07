import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sessions: [],
};

const activitySlice = createSlice({
  name: "activity",
  initialState,
  reducers: {
    setActivity(state, action) {
      state.sessions = action.payload;
    },
    clearActivity(state) {
      state.sessions = [];
    },
  },
});

export const { setActivity, clearActivity } = activitySlice.actions;
export default activitySlice.reducer;
