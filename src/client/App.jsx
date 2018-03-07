import React from 'react';
import Message from './containers/Message';
import HelloButton from './containers/HelloButton';
import MessageAsync from './containers/MessageAsync';
import HelloAsyncButton from './containers/HelloAsyncButton';
import { APP_NAME } from '../shared/config';

const App = () => (
    <div>
        <h1>{APP_NAME}</h1>
        <Message />
        <HelloButton />
        <MessageAsync />
        <HelloAsyncButton />
    </div>
);

export default App;
