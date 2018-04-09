import { RSAA } from 'redux-api-middleware';
import { 
    //NORMAL LOGIN
    LOGIN_REQUEST, 
    LOGIN_SUCCESS, 
    LOGIN_FAILURE,
    AUTHENTICATION_REQUEST,
    AUTHENTICATION_SUCCESS,
    AUTHENTICATION_FAILURE,
    LOGOUT,
    //FACEBOOK LOGIN
    LOGIN_FACEBOOK_REQUEST,
    LOGIN_FACEBOOK_SUCCESS,
    LOGIN_FACEBOOK_FAILURE,
    POST_FB_DATA_REQUEST,
    POST_FB_DATA_SUCCESS,
    POST_FB_DATA_FAILURE,
    DELETE_FB_PERMISSION_REQUEST,
    DELETE_FB_PERMISSION_SUCCESS,
    DELETE_FB_PERMISSION_FAILURE,
    //EDIT
    USER_EDIT_REQUEST,
    USER_EDIT_SUCCESS,
    USER_EDIT_FAILURE,
    //HISTORY
    USER_HISTORY_REQUEST,
    USER_HISTORY_SUCCESS,
    USER_HISTORY_FAILURE,
} from '../constants/actions_types';

import { 
    SERVER_LOGIN, 
    POST_FACEBOOK_DATA,
    TOKEN_CHECK,
    USER_ENDPOINT,
    USER_HISTORY,
} from '../constants/endpoints';

export const check_token = () =>({
    [RSAA]: {
        endpoint: TOKEN_CHECK,
        method: 'GET',
        headers: {
            'Authorization': 'Bearer '+localStorage.getItem("login_token")},
        types: [    
            AUTHENTICATION_REQUEST,
            AUTHENTICATION_SUCCESS,
            AUTHENTICATION_FAILURE,
        ]
    }
})
export const onLogin = (values) =>({
    [RSAA]: {
        endpoint: SERVER_LOGIN,
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(values),
        types: [
            LOGIN_REQUEST,
            LOGIN_SUCCESS,
            LOGIN_FAILURE
        ]
    }
})
export const onLogin_facebook = (request) =>({
    [RSAA]: {
        endpoint: request,
        method: 'GET',
        types: [
            LOGIN_FACEBOOK_REQUEST,
            LOGIN_FACEBOOK_SUCCESS,
            LOGIN_FACEBOOK_FAILURE
        ]
    }
})
export const postFB_dataToServer = (values) =>({
    [RSAA]: {
        endpoint: POST_FACEBOOK_DATA,
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(values),
        types: [
            POST_FB_DATA_REQUEST,
            POST_FB_DATA_SUCCESS,
            POST_FB_DATA_FAILURE,
        ]
    }
})
export const delete_fb_app_permission = () =>({
    [RSAA]: {
        endpoint: 'https://graph.facebook.com/'+
            localStorage.getItem("fb_userID")+'/permissions/?access_token='+
            localStorage.getItem("fb_accessToken"),
        method: 'DELETE',
        types: [    
            DELETE_FB_PERMISSION_REQUEST,
            DELETE_FB_PERMISSION_SUCCESS,
            DELETE_FB_PERMISSION_FAILURE,
        ]
    }
})
export const onEditUser = (bodyVal) => ({
    [RSAA]: {
        endpoint: USER_ENDPOINT,
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+localStorage.getItem("login_token")},
        body: JSON.stringify(bodyVal),
        types: [    
            USER_EDIT_REQUEST,
            USER_EDIT_SUCCESS,
            USER_EDIT_FAILURE,
        ]
    }  
})
export const getUserHistory = () => ({
    [RSAA]: {
        endpoint: USER_HISTORY,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+localStorage.getItem("login_token")},
        types: [    
            USER_HISTORY_REQUEST,
            USER_HISTORY_SUCCESS,
            USER_HISTORY_FAILURE,
        ]
    }  
})
export function onLogout() {
    return {
        type: LOGOUT,
    }
}

