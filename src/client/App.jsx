// @flow

import React from 'react';
import Message from './containers/Message';
import HelloButton from './containers/HelloButton';
import { APP_NAME } from '../shared/config';

const App = () => (
    <div>
        <h1>{APP_NAME}</h1>
        <Message />
        <HelloButton />
    </div>
);

export default App;
