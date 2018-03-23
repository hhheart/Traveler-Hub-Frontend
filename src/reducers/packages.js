import {  
    GET_PACKAGE_SUCCESS,
    GET_PACKAGE_FAILURE,
} from '../constants/actions_types';

const initialState = {
    packages: null,
    loading: true,
}
const packages_get = (state = initialState, action) => {
    switch(action.type) {
        case GET_PACKAGE_SUCCESS:
            console.log('get packages success')
            return ({
                packages: action.payload.packages,
                loading: false,
            })
        case GET_PACKAGE_FAILURE:
            console.log('get packages failure')
            return ({
                loading: false,
            }) 
        default:
            return state

    }
}
      
export default packages_get