import {
    clientLog

} from '../actions/actions';

import {
    setupClientLog
} from '../utilities/utilities'

const initState = {
    clientName: ''
}

const loginReducer = (state = initState, action) => {
    const actionType = action.type;
    switch(actionType) {
        case clientLog().type:
            return setupClientLog(state, action.value);
        default: return state;    
    }
}

export default loginReducer;