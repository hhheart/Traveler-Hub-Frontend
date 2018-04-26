import { RSAA } from 'redux-api-middleware';
import { 
    AGENCY_REGIS_REQUEST,
    AGENCY_REGIS_SUCCESS,
    AGENCY_REGIS_FAILURE,

    AGENCY_LINECHART_REQUEST,
    AGENCY_LINECHART_SUCCESS,
    AGENCY_LINECHART_FAILURE,

    AGENCY_BARCHART_REQUEST,
    AGENCY_BARCHART_SUCCESS,
    AGENCY_BARCHART_FAILURE,

    AGENCY_USERCHART_REQUEST,
    AGENCY_USERCHART_SUCCESS,
    AGENCY_USERCHART_FAILURE,
} from '../constants/actions_types';

import { 
    USER_ENDPOINT,
    AGENCY_LINECHART_TEMPLATE,
    AGENCY_BARCHART_TEMPLATE,
    AGENCY_USERCHART_TEMPLATE
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
export const get_BarChart = (REQUEST) =>({
    [RSAA]: {
        endpoint: AGENCY_BARCHART_TEMPLATE + REQUEST,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+localStorage.getItem("login_token"),
        },
        types: [    
            AGENCY_BARCHART_REQUEST,
            AGENCY_BARCHART_SUCCESS,
            AGENCY_BARCHART_FAILURE,
        ]
    }
})
export const get_UserChart = (REQUEST) =>({
    [RSAA]: {
        endpoint: AGENCY_USERCHART_TEMPLATE + REQUEST,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+localStorage.getItem("login_token"),
        },
        types: [    
            AGENCY_USERCHART_REQUEST,
            AGENCY_USERCHART_SUCCESS,
            AGENCY_USERCHART_FAILURE,
        ]
    }
})