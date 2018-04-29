import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router'
import { check_token, } from '../actions/user';
import $ from 'jquery';
import jQuery from 'jquery';

import HomeView from '../components/home';
import LineChart from '../containers/agency/chart_line';
import LoginModal from '../containers/login';
import RegisterModal from '../containers/register';
import RegisAgencyModal from '../containers/agency/register';

//import '../static/css/feedback.css'; 

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {  
        }; 
    }  
    //fix user edit
    IsReRenderNeeded(){
        if (localStorage.getItem('tk_refresh') !== null){
            localStorage.removeItem('tk_refresh')
            window.location.reload()
        }
    }
    IsUserLoggedIn(){
        this.props.check_token()
        .then( ()=> {
            if(this.props.isLoggedIn === false){
                window.jQuery = jQuery;
                require('bootstrap')
                jQuery('#loginModal').modal('show');
            }
        })
    }
    ChooseHomeContent(){
        if (this.props.usertype === 'customer'){
            if (localStorage.getItem('redirect') !== null){
                //return <Redirect to={`/package/detail/5ad250ef13d0cd04e23e08cb`} push />
                this.props.history.push(`/package/detail/${localStorage.getItem('redirect')}`)
            }
            else {
                return <HomeView />
            }
        }
        else if (this.props.usertype === 'agency'){
            return <LineChart />
        }
    }
    render(){
        $('html, body').scrollTop(0);
        return (
            <div>
                {this.IsUserLoggedIn()}
                {this.ChooseHomeContent()}
                {this.IsReRenderNeeded()}
                <LoginModal />
                <RegisterModal />
                <RegisAgencyModal />
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        isLoggedIn: state.user.isLoggedIn,
        usertype: state.user.role,
    };
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        check_token,
    }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));