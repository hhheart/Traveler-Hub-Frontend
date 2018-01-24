export default function(state=null, action){
    switch(action.type){
        case 'TEST':
            return action.value;
        case 'TEST2':
            return action.value;
        default:
            return state;
    }

    //return state
}