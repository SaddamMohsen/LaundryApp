import { createRequestTypes, createActionTypes } from "../../utils/redux";

export const LOGIN = createRequestTypes("LOGIN");
export const LOGOUT = createRequestTypes("LOGOUT");
export const LOGIN_REQUEST = createRequestTypes("LOGIN_REQUEST");
export const LOGIN_FAILURE = createRequestTypes("LOGIN_FAILURE");
export const LOGIN_SUCCESS = createRequestTypes("LOGIN_SUCCESS");
export const LOGOUT_REQUEST = createRequestTypes("LOGOUT_REQUEST");
export const LOGOUT_FAILURE = createRequestTypes("LOGOUT_FAILURE");
export const LOGOUT_SUCCESS = createRequestTypes("LOGOUT_SUCCESS");
//export const SEND_CODE = createRequestTypes("SEND_CODE");
//export const CHANGE_MENU_STATUS = createRequestTypes("CHANGE_MENU_STATUS");

export const login = createActionTypes(LOGIN);
export const request = createActionTypes(LOGIN_REQUEST);
export const logout = createActionTypes(LOGOUT);

//export const LOGIN_REQUEST=createRequestTypes("LOGIN_REQUEST");
/*
	LOGIN_REQUEST: 'USERS_LOGIN_REQUEST',
    LOGIN_SUCCESS: 'USERS_LOGIN_SUCCESS',
    LOGIN_FAILURE: 'USERS_LOGIN_FAILURE'
}
*/
//export const sendCode = createActionTypes(SEND_CODE);

//export const changeMenuStatus = createActionTypes(CHANGE_MENU_STATUS);
