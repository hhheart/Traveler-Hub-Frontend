import {  
    SEARCH_SUCCESS,
    SEARCH_FAILURE,

    DICTIONARY_SUCCESS,
    DICTIONARY_FAILURE,        
} from '../constants/actions_types';

const initialState = {
    loading: true,
    packages: null,
    total_pages: '',
    curent_page: '',
    dictionary: null,
    
}
const package_search = (state = initialState, action) => {
    switch(action.type) {
        case DICTIONARY_SUCCESS:
            console.log('get_dictionary_success')
            return ({
                dictionary: action.payload.regions,
                loading: false,
            })
        case DICTIONARY_FAILURE:
            console.log('get_dictionary_failure')
            return ({
                ...state,
                loading: false,
            })
        case SEARCH_SUCCESS:
            console.log('search success')
            return ({
                packages: action.payload.packages,
                total_pages: action.payload.totalPage,
                curent_page: action.payload.currentPage,
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