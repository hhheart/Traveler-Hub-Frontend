import React from 'react';
import ReactDOM from 'react-dom';

import './static/css/index.css';

import {
    BrowserRouter as Router,
    //StaticRouter,
    //browserHistory,
} from 'react-router-dom';

import routes from './routes';

ReactDOM.render((
        <Router>
            {routes}
        </Router>
), document.getElementById('root'));
