import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider as ReduxProvider } from 'react-redux';
//import buildStore from './todoExemple';
import buildStore from './storeWithThunkMiddleware'

ReactDOM.render(
    <ReduxProvider store={buildStore()}>
        <App />
    </ReduxProvider>,
    document.getElementById('root')
);
