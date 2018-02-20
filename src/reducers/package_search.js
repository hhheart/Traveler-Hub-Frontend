import {  
    SEARCH_SUCCESS,
    SEARCH_FAILURE,
} from '../constants/actions_types';

const initialState = {
    packages: null,
    loading: true,
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
        default:
            return state

    }
}
      
export default package_search