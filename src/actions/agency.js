import { RSAA } from 'redux-api-middleware';
import { 
    AGENCY_REGIS_REQUEST,
    AGENCY_REGIS_SUCCESS,
    AGENCY_REGIS_FAILURE,

    AGENCY_LINECHART_REQUEST,
    AGENCY_LINECHART_SUCCESS,
    AGENCY_LINECHART_FAILURE,
} from '../constants/actions_types';

import { 
    USER_ENDPOINT,
    AGENCY_LINECHART_TEMPLATE,
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
export const get_LineChart = (REQUEST) =>({
    [RSAA]: {
        endpoint: AGENCY_LINECHART_TEMPLATE + REQUEST,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+localStorage.getItem("login_token"),
        },
        types: [    
            AGENCY_LINECHART_REQUEST,
            AGENCY_LINECHART_SUCCESS,
            AGENCY_LINECHART_FAILURE,
        ]
}
})
export function select_choice(val) {
    console.log('choice is coming')
    //console.log(val)
    return {
        type: "CHOICE",
        value: val,
    }
}