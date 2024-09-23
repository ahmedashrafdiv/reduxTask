import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "userName",
  initialState: { userName: "ahmed" },
  reducers: {
    changeName: (state, action) => {
      state.userName = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { changeName } = userSlice.actions;
