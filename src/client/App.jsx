import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { APP_NAME } from '../shared/config';
import Nav from './components/nav';
import HomePage from './components/pages/Home';
import HelloPage from './components/pages/Hello';
import HelloAsyncPage from './components/pages/HelloAsync';
import NotFoundPage from './components/pages/NotFound';
import {
    HOME_PAGE_ROUTE,
    HELLO_PAGE_ROUTE,
    HELLO_ASYNC_PAGE_ROUTE,
} from '../shared/routes';

const App = () => (
    <div>
        <h1>{APP_NAME}</h1>
        <Nav />
        <Switch>
            <Route exact path={HOME_PAGE_ROUTE} render={() => <HomePage />} />
            <Route path={HELLO_PAGE_ROUTE} render={() => <HelloPage />} />
            <Route path={HELLO_ASYNC_PAGE_ROUTE} render={() => <HelloAsyncPage />} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>
);

export default App;
