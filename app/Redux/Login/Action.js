import { LOGIN } from "./ActionTypes";

export const usersLogin = (loginCredentials) => ({
    type: LOGIN,
    payload: loginCredentials,
});

export const userLoginResponse = (loginResponse) => ({
    type: LOGIN_RESPONSE,
    payload: loginResponse,
});