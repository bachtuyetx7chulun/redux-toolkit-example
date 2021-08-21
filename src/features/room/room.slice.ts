import { createSlice } from "@reduxjs/toolkit";
import { signout } from "../auth/auth.slice";

import { IRoom } from "./room.interface";

const initialState: IRoom[] = [];

export const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    createRoom: (state, action) => {
      state.push(action.payload);
      return state;
    },
    removeRoom: (state, action) => {
      state = state.filter((room) => room.id !== action.payload.id);
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signout, (state, action) => {
      state = [];
      return state;
    });
  },
});

const { reducer, actions } = roomSlice;
export const { createRoom, removeRoom } = actions;
export default reducer;
