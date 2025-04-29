// 0 ==> Development
// 1 ==> Production

let APP_MODE = 0;

export const baseURL = APP_MODE === 0 ? 'https://api.com/' : 'https://api.com/';

export const AUTH_SIGN_IN = 'auth/sign-in';
