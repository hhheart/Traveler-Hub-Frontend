import { RSAA } from 'redux-api-middleware';
import { 
    AGENCY_REGIS_REQUEST,
    AGENCY_REGIS_SUCCESS,
    AGENCY_REGIS_FAILURE,
} from '../constants/actions_types';

import { 
    USER_ENDPOINT,
} from '../constants/endpoints';

export const agency_register = (bodyVal) =>({
        [RSAA]: {
            endpoint: USER_ENDPOINT,
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(bodyVal),
            types: [    
                AGENCY_REGIS_REQUEST,
                AGENCY_REGIS_SUCCESS,
                AGENCY_REGIS_FAILURE,
            ]
    }
})