import {  
    AGENCY_REGIS_SUCCESS,
    AGENCY_REGIS_FAILURE,
    AGENCY_LINECHART_SUCCESS,
    AGENCY_LINECHART_FAILURE,
} from '../constants/actions_types';

const initialState = {
    response: "empty",
    choice: 'a',
    chart_data: '',
}
const agency = (state = initialState, action) => {
    switch(action.type) {
        case AGENCY_REGIS_SUCCESS:
            console.log('AGENCY-REGISTER-SUCCESS')
            return ({
                response: action.payload.message
            })
        case AGENCY_REGIS_FAILURE:
            console.log('AGENCY-REGISTER-FAILURE')
            return ({
                response: action.payload.message
            })
        
        case AGENCY_LINECHART_SUCCESS:
            console.log('GET-LINECHART-SUCCESS')
            return ({
                chart_data: action.payload,
            })
        case AGENCY_LINECHART_FAILURE:
            console.log('GET-LINECHART-FAILURE')
            return ({
                chart_data: action.payload,
            })

        case "CHOICE":
            console.log('choice is change choice is '+action.value)
            return ({
                choice: action.value
            })
        default:
            return state
    }
}
export default agency