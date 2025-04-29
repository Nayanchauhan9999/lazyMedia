import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {ILoginData, IUser} from '@types';

export const userInfoSlice = createSlice({
  initialState: {
    loginData: {} as ILoginData,
    token: '',
    isOnboard: false,
    isLogin: false,
    user: {} as IUser,
  },
  name: 'user',
  reducers: {
    setUser(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
    },
    setLoginData(state, action: PayloadAction<ILoginData>) {
      state.loginData = action.payload;
    },
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    setIsLogin(state, action: PayloadAction<boolean>) {
      state.isLogin = action.payload;
    },
  },
});

export const {setLoginData, setToken, setIsLogin, setUser} =
  userInfoSlice.actions;
export default userInfoSlice.reducer;
