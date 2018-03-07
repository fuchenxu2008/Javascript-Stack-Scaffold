import axios from 'axios';
import { createAction } from 'redux-actions';
import { helloEndpointRoute } from '../../shared/routes';

export const SAY_HELLO = 'SAY_HELLO';
export const SAY_HELLO_ASYNC = 'SAY_HELLO_ASYNC';
export const SAY_HELLO_ASYNC_PENDING = 'SAY_HELLO_ASYNC_PENDING';
export const SAY_HELLO_ASYNC_SUCCESS = 'SAY_HELLO_ASYNC_FULFILLED';
export const SAY_HELLO_ASYNC_FAILURE = 'SAY_HELLO_ASYNC_REJECTED';

export const sayHello = createAction(SAY_HELLO);
export const sayHelloAsyncRequest = createAction(SAY_HELLO_ASYNC);

export const sayHelloAsync = num => (dispatch) => {
    dispatch(sayHelloAsyncRequest(axios.get(helloEndpointRoute(num))));
};
