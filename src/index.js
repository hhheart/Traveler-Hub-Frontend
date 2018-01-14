import React from 'react';
import ReactDOM from 'react-dom';

import './static/css/index.css';

import ScrollToTop from './components/ScrollToTop.jsx';
import { BrowserRouter as Router,} from 'react-router-dom';

import routes from './routes';

ReactDOM.render((
        <Router>
            <ScrollToTop>
                {routes}
            </ScrollToTop>
        </Router>
), document.getElementById('root'));
