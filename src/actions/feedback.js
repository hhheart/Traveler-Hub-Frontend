import { RSAA } from 'redux-api-middleware';
import { 
    FEEDBACK_PUT_REQUEST,
    FEEDBACK_PUT_SUCCESS,
    FEEDBACK_PUT_FAILURE,
    // FEEDBACK
    BOOKMARK_PUT_REQUEST,
    BOOKMARK_PUT_SUCCESS,
    BOOKMARK_PUT_FAILURE,
} from '../constants/actions_types';

import { 
    USER_HISTORY,
    FEEDBACK_ENDPOINT,
} from '../constants/endpoints';

export const sent_feedback = (bodyVal) =>({
        [RSAA]: {
            endpoint: FEEDBACK_ENDPOINT,
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+localStorage.getItem("login_token")},
            body: JSON.stringify(bodyVal),
            types: [    
                FEEDBACK_PUT_REQUEST,
                FEEDBACK_PUT_SUCCESS,
                FEEDBACK_PUT_FAILURE,
            ]
    }
})
export const sent_bookmark = (bodyVal) =>({
    [RSAA]: {
        endpoint: USER_HISTORY ,
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+localStorage.getItem("login_token")},
        body: JSON.stringify(bodyVal),
        types: [    
            BOOKMARK_PUT_REQUEST,
            BOOKMARK_PUT_SUCCESS,
            BOOKMARK_PUT_FAILURE,
        ]
}
})
