import {  
    FEEDBACK_PUSH_SUCCESS,
    FEEDBACK_PUSH_FAILURE,
} from '../constants/actions_types';

const initialState = {

}
const feedback = (state = initialState, action) => {
    switch(action.type) {
        case FEEDBACK_PUSH_SUCCESS:
            return console.log('feedback success')
        case FEEDBACK_PUSH_FAILURE:
            return console.log('feedback failure')
        default:
            return state
    }
}
      
export default feedback