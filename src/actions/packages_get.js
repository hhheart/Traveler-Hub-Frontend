
import { RSAA } from 'redux-api-middleware';
import { 
    GET_PACKAGE_REQUEST,
    GET_PACKAGE_SUCCESS,
    GET_PACKAGE_FAILURE,
} from '../constants/actions_types';

import { 
    GET_PACKAGE_TEMPLATE
} from '../constants/endpoints';

export const onRequestPackage = (val1,val2) =>({
    [RSAA]: {
        endpoint: GET_PACKAGE_TEMPLATE,
        method: 'GET',
        types: [    
            GET_PACKAGE_REQUEST,
            GET_PACKAGE_SUCCESS,
            GET_PACKAGE_FAILURE,]
    }
})
