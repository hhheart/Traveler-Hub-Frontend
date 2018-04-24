import {  
    AGENCY_REGIS_SUCCESS,
    AGENCY_REGIS_FAILURE,
    
    AGENCY_LINECHART_SUCCESS,
    AGENCY_LINECHART_FAILURE,
    
    AGENCY_BARCHART_SUCCESS,
    AGENCY_BARCHART_FAILURE,
    
    AGENCY_USERCHART_SUCCESS,
    AGENCY_USERCHART_FAILURE,
} from '../constants/actions_types';

const initialState = {
    response: "empty",
    lineR: '',
    lineP: '',
    lineT: '',
    barA: '',
    barB: '',
    barC: '',
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
                ...state
            })
        case AGENCY_LINECHART_SUCCESS:
            console.log('GET-LINECHART-SUCCESS')
            switch(action.payload.type){
                case 'regions': 
                    return ({
                        ...state,
                        lineR: action.payload.data,
                    })
                case 'provinces': 
                    return ({
                        ...state,
                        lineP: action.payload.data,
                    })
                case 'travel_types': 
                    return ({
                        ...state,
                        lineT: action.payload.data,
                    })
                default: 
                    return ({ ...state})
            }
        case AGENCY_LINECHART_FAILURE:
            console.log('GET-LINECHART-FAILURE')
            return ({
                ...state
            })

        case AGENCY_BARCHART_SUCCESS:
            console.log('GET-BARCHART-SUCCESS')
            console.log(action.payload)
            if (action.payload.length === 6){
                return ({
                    ...state,
                    barA: action.payload,
                })
            }
            else if (action.payload.length === 9){
                return ({
                    ...state,
                    barB: action.payload,
                })              
            }
            else {break}
        case AGENCY_BARCHART_FAILURE:
            console.log('GET-BARCHART-FAILURE')
            return ({
                ...state
            })
        case AGENCY_USERCHART_SUCCESS:
            console.log('GET-USERCHART-SUCCESS')
            console.log(action.payload)
            return ({
                ...state,
                barC: action.payload,
            })
        case AGENCY_USERCHART_FAILURE:
            console.log('GET-USERCHART-FAILURE')
            return ({
                ...state
            })
        default:
            return state
    }
}
export default agency