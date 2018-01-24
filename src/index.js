import React from 'react';
import ReactDOM from 'react-dom';

import './static/css/index.css';

import ScrollToTop from './components/ScrollToTop.jsx';
import { BrowserRouter as Router,} from 'react-router-dom';

import routes from './routes';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render((
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router>
            <ScrollToTop>
                {routes}
            </ScrollToTop>
        </Router>
    </Provider>
), document.getElementById('root'));
