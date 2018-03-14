
import { RSAA } from 'redux-api-middleware';
import { 
    SEARCH_REQUEST,
    SEARCH_SUCCESS,
    SEARCH_FAILURE,

    DICTIONARY_REQUEST,
    DICTIONARY_SUCCESS,
    DICTIONARY_FAILURE,
} from '../constants/actions_types';

import { 
    SEARCH_PACKAGE_ROOT,
    SEARCH_DICTIONARY
} from '../constants/endpoints';

export const onRequestPackage = (rq) =>({
    [RSAA]: {
        endpoint: SEARCH_PACKAGE_ROOT+rq,
        method: 'GET',
        types: [    
            SEARCH_REQUEST,
            SEARCH_SUCCESS,
            SEARCH_FAILURE,
        ]
    }
})

export const onRequestDictionary = () =>({
    [RSAA]: {
        endpoint: SEARCH_DICTIONARY,
        method: 'GET',
        types: [    
            DICTIONARY_REQUEST,
            DICTIONARY_SUCCESS,
            DICTIONARY_FAILURE,
        ]
    }
})
