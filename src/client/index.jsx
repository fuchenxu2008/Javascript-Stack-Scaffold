// @flow

import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import App from './App';
import { APP_CONTAINER_SELECTOR } from '../shared/config';
import configureStore from './configureStore';

const store = configureStore();

const rootEl = document.querySelector(APP_CONTAINER_SELECTOR);

if (!(rootEl instanceof Element)) {
    throw new Error('invalid type');
}

const wrapApp = (AppComponent, reduxStore) => (
    <Provider store={reduxStore}>
        <AppContainer>
            <AppComponent />
        </AppContainer>
    </Provider>
);

ReactDOM.render(wrapApp(App, store), rootEl);

if (module.hot) {
    // flow-disable-next-line
    module.hot.accept('./App', () => {
        // eslint-disable-next-line global-require
        const NextApp = require('./App').default;
        ReactDOM.render(wrapApp(NextApp, store), rootEl);
    });
}