import React /*{ Component }*/ from 'react';
import {
    Route,
    Switch,
    
} from 'react-router-dom';

import App from './components/App';
import HomePage from './components/home';
import PackageList from './components/package_list';
import PackageDetail from './components/package_detail';
import Test from './components/test';


//import { URL_ROOT } from 'endpoint';
export default (
    <App>
        <div>
            <Switch>
                
                <Route exact path={'/'} component={HomePage} />
                <Route path={'/package/detail/:id'} component={PackageDetail} />
                <Route path={'/package'} component={PackageList} />
                <Route path={'/test/:name'} component={Test} />
                
            </Switch>
        </div>
    </App>
)