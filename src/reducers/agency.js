import {  
    AGENCY_REGIS_SUCCESS,
    AGENCY_REGIS_FAILURE,
} from '../constants/actions_types';

const initialState = {
    response: "empty",
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
        default:
            return state
    }
}
export default agency