import { RSAA } from 'redux-api-middleware';
import { 
    FEEDBACK_PUSH_REQUEST,
    FEEDBACK_PUSH_SUCCESS,
    FEEDBACK_PUSH_FAILURE
} from '../constants/actions_types';

import { 
    FEEDBACK_ENDPOINT,
} from '../constants/endpoints';

export const sent_feedback = (bodyVal) =>({
        [RSAA]: {
            endpoint: FEEDBACK_ENDPOINT,
            method: 'PUT',
            headers: {
                'Authorization': 'Bearer '+localStorage.getItem("login_token")},
            body: JSON.stringify(bodyVal),
            types: [    
                FEEDBACK_PUSH_REQUEST,
                FEEDBACK_PUSH_SUCCESS,
                FEEDBACK_PUSH_FAILURE,
            ]
    }
})
