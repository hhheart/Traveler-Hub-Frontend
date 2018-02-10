import {  
    AUTHENTICATION_SUCCESS,
    AUTHENTICATION_FAILURE,

    LOGIN_SUCCESS, 
    LOGIN_FAILURE,

    LOGIN_FACEBOOK_SUCCESS,
    LOGIN_FACEBOOK_FAILURE,

    LOGOUT,
} from '../constants/actions_types';

//import { TOKEN_CHECK } from '../constants/endpoints';

const initialState = {
    role: 'guest',
    email: '',
    errorMsg: '',
    isLoggedIn: false,
    detail: {}
}
const user = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_SUCCESS:
            console.log('login success')
            localStorage.setItem('login_token', action.payload.token)
            return ({
                //...state,
                isLoggedIn: true,
                email: action.payload.user.email,
                role: action.payload.user.usertype,
                errorMsg: '',
            })
        case LOGIN_FAILURE:
            console.log('login failure')
            return ({
                //detail: {},
                role: 'guest',
                email: '',
                errorMsg: 'error',
                isLoggedIn: false
            })

        case LOGIN_FACEBOOK_SUCCESS:
            console.log('facebook success')
            return ({
            })
        case LOGIN_FACEBOOK_FAILURE:
            console.log('facebook failure')
            return ({
            })

        case LOGOUT: 
            console.log('loging out')
            localStorage.removeItem('login_token')
            return ({
                role: 'guest',
                email: '',
                errorMsg: '',
                isLoggedIn: false
            })
        case AUTHENTICATION_SUCCESS:
            console.log('authentication success')
            return ({
                isLoggedIn: true,
                email: action.payload.email,
                role: action.payload.usertype,              
            })
        case AUTHENTICATION_FAILURE:
            console.log('authentication failure')
            return ({
                isLoggedIn: false,
                email: '',
                role: 'guest',   
            })        
        default:
            return state
    }
}
      
export default user