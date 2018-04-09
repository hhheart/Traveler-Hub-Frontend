import {  
    FEEDBACK_PUT_SUCCESS,
    FEEDBACK_PUT_FAILURE,
    
    BOOKMARK_PUT_SUCCESS,
    BOOKMARK_PUT_FAILURE,
} from '../constants/actions_types';

const initialState = {

}
const feedback = (state = initialState, action) => {
    switch(action.type) {
        case FEEDBACK_PUT_SUCCESS:
            return console.log('sent feedback success')
        case FEEDBACK_PUT_FAILURE:
            return console.log('sent feedback failure')
        case BOOKMARK_PUT_SUCCESS:
            return console.log('sent bookmark success')
        case BOOKMARK_PUT_FAILURE:
            return console.log('sent bookmark failure')
        default:
            return state
    }
}
      
export default feedback