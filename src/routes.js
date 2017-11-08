import React /*{ Component }*/ from 'react';
import {
    Route,
    Switch,
} from 'react-router';

import App from './components/App';
import PackageList from './components/package_list';
import PackageDetail from './components/package_detail';


//import { URL_ROOT } from 'endpoint';

export default (
    <App>
        <Switch>
        
            <Route exact path={'/'} component={PackageList} />
            <Route path={'/detail'} component={PackageDetail} />
        
        </Switch>
    </App>
)