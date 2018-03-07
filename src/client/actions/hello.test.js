import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

import { sayHelloAsyncRequest } from './hello';

import { helloEndpointRoute } from '../../shared/routes';

const mockStore = configureMockStore([thunkMiddleware]);

afterEach(() => {
    fetchMock.restore();
});

test('sayHelloAsync success', () => {
    fetchMock.get(helloEndpointRoute(666), { serverMessage: 'Async hello success' });
    const store = mockStore();
    store.dispatch(sayHelloAsyncRequest(666));
    return expect(store.getActions()).toEqual([
        sayHelloAsyncRequest(666),
        // sayHelloAsyncSuccess('Async hello success'),
    ]);
});

// test('sayHelloAsync 404', () => {
//     fetchMock.get(helloEndpointRoute(666), 404);
//     const store = mockStore();
//     return store.dispatch(sayHelloAsyncRequest(666))
//         .then(() => {
//             expect(store.getActions()).toEqual([
//                 sayHelloAsyncRequest(),
//                 // sayHelloAsyncFailure(),
//             ]);
//         });
// });

// test('sayHelloAsync data error', () => {
//     fetchMock.get(helloEndpointRoute(666), {});
//     const store = mockStore();
//     return store.dispatch(sayHelloAsyncRequest(666))
//         .then(() => {
//             expect(store.getActions()).toEqual([
//                 sayHelloAsyncRequest(),
//                 // sayHelloAsyncFailure(),
//             ]);
//         });
// });
