export interface ErrorResBody {
  status: number;
  message: string;
  error?: string;
}

export interface ICommonResponse<T = any> {
  status: number;
  message: string;
  data?: T;
}

export interface ILoginData {
  user: IUser;
  token: string;
}

export interface IUser {
  id: string;
}
