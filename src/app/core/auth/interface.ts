export interface IAuthRequest {
  name: string;
  email: string;
  password: string;
}

export interface IAuthResponse {
  user: IUser;
  token: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
}
