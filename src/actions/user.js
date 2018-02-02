import { RSAA } from 'redux-api-middleware';
import { 
    LOGIN_REQUEST, 
    LOGIN_SUCCESS, 
    LOGIN_FAILURE,
} from '../constants/actions_types';

import { SERVER_LOGIN } from '../constants/endpoints';

export const onLogin = (values) =>({
    [RSAA]: {
        endpoint: SERVER_LOGIN,
        method: 'POST',
        //headers: {'Key': 'Authorization'},
        body: JSON.stringify(values),
        types: [
            LOGIN_REQUEST,
            LOGIN_SUCCESS,
            LOGIN_FAILURE
        ]
    }
  })