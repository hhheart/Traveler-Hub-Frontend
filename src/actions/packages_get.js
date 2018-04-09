
import { RSAA } from 'redux-api-middleware';
import { 
    GET_PACKAGE_REQUEST,
    GET_PACKAGE_SUCCESS,
    GET_PACKAGE_FAILURE,
} from '../constants/actions_types';

import { 
    GET_PACKAGE_TEMPLATE
} from '../constants/endpoints';

export const GET_Package = (pkID) =>({
    [RSAA]: {
        endpoint: `${GET_PACKAGE_TEMPLATE}${pkID}`,
        method: 'GET',
        headers: {'Authorization': 'Bearer '+localStorage.getItem("login_token")},
        types: [    
            GET_PACKAGE_REQUEST,
            GET_PACKAGE_SUCCESS,
            GET_PACKAGE_FAILURE,]
    }
})
