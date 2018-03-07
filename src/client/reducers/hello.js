import Immutable from 'immutable';

import {
    SAY_HELLO,
    SAY_HELLO_ASYNC_PENDING,
    SAY_HELLO_ASYNC_SUCCESS,
    SAY_HELLO_ASYNC_FAILURE,
} from '../actions/hello';

const initialState = Immutable.fromJS({
    message: 'Initial reducer message',
    messageAsync: 'Initial reducer message for async call',
});

const helloReducer = (state = initialState, action) => {
    switch (action.type) {
    case SAY_HELLO:
        return state.set('message', action.payload);
    case SAY_HELLO_ASYNC_PENDING:
        return state.set('messageAsync', 'Loading...');
    case SAY_HELLO_ASYNC_SUCCESS:
        return state.set('messageAsync', action.payload.data.serverMessage);
    case SAY_HELLO_ASYNC_FAILURE:
        return state.set('messageAsync', 'No message received, please check your connection');
    default:
        return state;
    }
};

export default helloReducer;
