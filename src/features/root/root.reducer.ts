import authReducer from "../auth/auth.slice";
import roomReducer from "../room/room.slice";

const rootReducer = {
  auth: authReducer,
  rooms: roomReducer,
};

export default rootReducer;
