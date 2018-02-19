
import { RSAA } from 'redux-api-middleware';
import { 
    SEARCH_REQUEST,
    SEARCH_SUCCESS,
    SEARCH_FAILURE,
    SET_MINP
} from '../constants/actions_types';

import { 
    SEARCH_PACKAGE_ROOT
} from '../constants/endpoints';

export const onRequestPackage = (rq) =>({
    [RSAA]: {
        endpoint: SEARCH_PACKAGE_ROOT+rq,
        method: 'GET',
        types: [    
            SEARCH_REQUEST,
            SEARCH_SUCCESS,
            SEARCH_FAILURE,]
    }
})

export function onSetminp(value) {
    return {
        type: SET_MINP,
        payload: value
    }
}