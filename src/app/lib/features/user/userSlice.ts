import { createSlice, createAction } from "@reduxjs/toolkit";
import { User } from "../../definitions";

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const setUser = createAction<User>("user/setUser");
export default userSlice.reducer;
