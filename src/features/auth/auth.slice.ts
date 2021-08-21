import { createSlice } from "@reduxjs/toolkit";
import { IAuth } from "./auth.interface";

const initialState: IAuth = {
  login: false,
  profile: {
    name: "",
    email: "",
    facebookId: "",
    googleId: "",
    picture: "",
    role: "",
    type: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signin: (state, action) => {
      state = { state, ...action.payload };
      return state;
    },
    signout: (state, action) => {
      state = { state, ...action.payload };
      return state;
    },
  },
});

const { reducer, actions } = authSlice;
export const { signin, signout } = actions;
export default reducer;
