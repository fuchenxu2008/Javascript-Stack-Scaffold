// @flow

import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { isProd } from '../shared/util';

const configureStore = () => createStore(
    rootReducer,
    (isProd ? // eslint-disable-next-line no-underscore-dangle
        undefined : window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ),
    applyMiddleware(),
);

export default configureStore;
