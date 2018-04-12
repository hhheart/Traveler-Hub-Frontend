import React from 'react';
import { Route, Switch} from 'react-router-dom';

import App from './components/App';
import Home from './containers/home';
import PackageList from './components/package_list';
import PackageDetail from './containers/package_detail';
import PackageSearch from './containers/package_search';
import Register from './components/register';
import Login from './containers/login';
import User_Profile from './components/user_profile/user_profile';
import AboutUS from './components/about_us';
//agency
import LineChart from './containers/agency/chart_line';
import BarChart from './containers/agency/chart_bar';

export default (
    <App>
        <div>
            <Switch>  
                    <Route exact path={`/`} component={Home} />         
                    <Route path={'/package/detail/:id'} component={PackageDetail} />
                    <Route path={'/package/search/page=:page_id'} component={PackageSearch} />
                    <Route path={'/package/page=:page_id'} component={PackageList} />                         
                    <Route path={'/member/register'} component={Register}/>
                    <Route path={'/member/login'} component={Login}/>
                    <Route path={'/member/profile'} component={User_Profile}/>
                    <Route path={'/AboutUS'} component={AboutUS}/>

                    <Route path={'/agency/line_chart'} component={LineChart}/>
                    <Route path={'/agency/bar_chart'} component={BarChart}/>
            </Switch>
        </div>
    </App>
)