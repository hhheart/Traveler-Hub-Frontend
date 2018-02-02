import {  
    LOGIN_SUCCESS, 
    LOGIN_FAILURE,
} from '../constants/actions_types';

const initialState = {
    username: '',
    isLoggedIn: false,
    role: 'guest',
    detail: {}
}

const user = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_SUCCESS:
            console.log('login success')
            //console.log(action.payload.username)
            return ({
                //...state,
                //username: action.payload.username,
                //role: action.payload.role,
                errorMsg: '',
                isLoggedIn: true
            })
        case LOGIN_FAILURE:
            console.log('login failure')
            return ({
                //detail: {},
                username: '',
                role: 'guest',
                //errorMsg: action.payload.response.errorMsg,
                isLoggedIn: false
            })
        default:
            return state
    }
}
      
export default user