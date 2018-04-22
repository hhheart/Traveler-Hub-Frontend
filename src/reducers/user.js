import {  
    AUTHENTICATION_SUCCESS,
    AUTHENTICATION_FAILURE,
    //NORMAL LOGIN
    LOGIN_SUCCESS, 
    LOGIN_FAILURE,
    LOGOUT,
    //FACEBOOK LOGIN
    LOGIN_FACEBOOK_SUCCESS,
    LOGIN_FACEBOOK_FAILURE,
    POST_FB_DATA_SUCCESS,
    POST_FB_DATA_FAILURE,
    DELETE_FB_PERMISSION_SUCCESS,
    DELETE_FB_PERMISSION_FAILURE,
    //EDIT
    USER_EDIT_SUCCESS,
    USER_EDIT_FAILURE,
    //HISTORY
    USER_HISTORY_SUCCESS,
    USER_HISTORY_FAILURE,   
} from '../constants/actions_types';

const initialState = {
    role: 'empty',
    isLoggedIn: false,
    fbLoggedIn: false,
    email: 'empty',
    profile_image: 'empty',
    errorMsg: 'empty',
}
const user = (state = initialState, action) => {
    switch(action.type) {
        case AUTHENTICATION_SUCCESS:
            if (localStorage.getItem('fb_userID') !== null){  
                console.log('authentication facebook success')
                console.log(action.payload)
                return ({
                    fbLoggedIn: true,
                    isLoggedIn: true,
                    email: action.payload.email,
                    profile_image: action.payload.profileImage,
                    role: action.payload.usertype,                
                })
            }
            else {
                console.log('authentication success')
                return ({
                    fbLoggedIn: false,
                    isLoggedIn: true,
                    email: action.payload.email,
                    profile_image: action.payload.profileImage,
                    role: action.payload.usertype,              
                })
            }
        case AUTHENTICATION_FAILURE:
            console.log('authentication failure')
            return ({
                ...state
            })   
        case LOGIN_SUCCESS:
            console.log('login success')
            localStorage.setItem('tk_refresh', 'tk_refresh_value')
            localStorage.setItem('login_token', action.payload.token)
            return ({
                isLoggedIn: true,
                email: action.payload.user.email,
                role: action.payload.user.usertype,
            })
        case LOGIN_FAILURE:
            console.log('login failure')
            return ({
                ...state
            })
        case LOGIN_FACEBOOK_SUCCESS:
            console.log('facebook success')
            localStorage.setItem('tk_refresh', 'tk_refresh_value')
            localStorage.setItem('login_token', action.payload.token)
            return ({
                isLoggedIn: true,
                fbLoggedIn: true,
                email: action.payload.email,
                profile_image: action.payload.picture.data.url,
                role: action.payload.user.usertype,
            })
        case LOGIN_FACEBOOK_FAILURE:
            console.log('facebook failure')
            return ({
                role: 'guest',
                email: '',
                errorMsg: 'error',
            })
        case POST_FB_DATA_SUCCESS:
            console.log('post fb data to server success')
            return({
                ...state,
                email: action.payload.user.email,                
            })
        case POST_FB_DATA_FAILURE:
            console.log('post fb data to server failure')
            return({
                ...state
            })
        case DELETE_FB_PERMISSION_SUCCESS:
            console.log('delete fb apps permission success')
            localStorage.removeItem('login_token')
            localStorage.removeItem('fb_userID')
            localStorage.removeItem('fb_accessToken')
            window.location.reload()
            return ({
                role: 'guest',
                email: '',
                fbLoggedIn: false,
                isLoggedIn: false,
            })
        case DELETE_FB_PERMISSION_FAILURE:
            console.log('delete app permission failure')
            return ({
                role: 'c',
                email: '',
                errorMsg: 'error',
            })     
        case LOGOUT: 
            console.log('loging out')
            localStorage.removeItem('login_token')
            return ({
                role: 'guest',
                email: '',
                isLoggedIn: false,
            })
        case USER_EDIT_SUCCESS:
            console.log('edit user success')        
            return ({...state}) 
        case USER_EDIT_FAILURE:
            console.log('edit user failure')
            return ({...state}) 
        case USER_HISTORY_SUCCESS:
            console.log('get user history success')        
            return ({...state}) 
        case USER_HISTORY_FAILURE:
            console.log('get user history failure')
            return ({...state}) 
        default:
            return state
    }
}
      
export default user