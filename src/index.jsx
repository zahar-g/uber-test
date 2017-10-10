import * as React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import configureStore from './store/configureStore';
import { loadSettings } from './actions/settingsActions';
import routes from './routes';

const store = configureStore();
store.dispatch(loadSettings());

render (
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);
