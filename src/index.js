import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import reducers from './reducers';
import { createStore } from 'redux';

export const store = createStore(reducers,window.devToolsExtension && window.devToolsExtension());




ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
)
