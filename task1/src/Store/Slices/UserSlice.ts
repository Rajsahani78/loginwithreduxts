import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "../Actions/UserAction";

interface userState {
  loggedInUser: object;
  loading: boolean;
}
const initialState = {
  loggedInUser: {},
  loading: false,
} as userState;

const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUser.fulfilled, (state, payload) => {
      state.loading = false;
      state.loggedInUser = payload;
    });
    builder.addCase(getUser.rejected, (state) => {
      state.loading = false;
    });
  },
});
export default userSlice.reducer;
