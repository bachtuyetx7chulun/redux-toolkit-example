import { IAuth } from "../auth/auth.interface";
import { IRoom } from "../room/room.interface";

export interface IRoot {
  auth: IAuth;
  rooms: IRoom[];
}
