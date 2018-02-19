import {  
    SEARCH_SUCCESS,
    SEARCH_FAILURE,
    SET_MINP,
} from '../constants/actions_types';

const initialState = {
    packages: null,
    loading: true,

    minp:'',
    maxp:'',
}
const package_search = (state = initialState, action) => {
    switch(action.type) {
        case SEARCH_SUCCESS:
            console.log('search success')
            console.log(action.payload)
            return ({
                packages: action.payload,
                loading: false,
            })
        case SEARCH_FAILURE:
            console.log('search failure')
            return ({
                loading: false,
            }) 

        case SET_MINP:
            console.log('payload '+ action.payload)
            return ({
                ...state,
                minp: action.payload
            })
        default:
            return state

    }
}
      
export default package_search