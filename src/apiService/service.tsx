import {useMutation} from '@tanstack/react-query';
import {AxiosError, AxiosResponse} from 'axios';
import {ErrorResBody, ICommonResponse, ILoginData} from '@types';
import {POST} from './axiosService';
import {AUTH_SIGN_IN} from './endpoints';

// ----------------------- AUTH FLOW API START ------------------------------//

// Login api (method: POST) ::: Endpoint ==> "auth/sign-in"
export const useLoginMutation = () => {
  return useMutation<
    AxiosResponse<ICommonResponse<ILoginData>, any>,
    AxiosError<ErrorResBody>,
    any,
    unknown
  >({
    mutationKey: ['login'],
    mutationFn: async (body: {email: string; password: string}) =>
      POST(AUTH_SIGN_IN, body),
  });
};
