export interface IAuth {
  login: boolean;
  profile: {
    name: string;
    googleId: string;
    facebookId: string;
    type: string;
    role: string;
    picture: string;
    email: string;
  };
}