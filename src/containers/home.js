import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { check_token, } from '../actions/user';
import $ from 'jquery';
import jQuery from 'jquery';

import HomeView from '../components/home';
import Chart from '../containers/agency/chart';
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
            return <HomeView />
        }
        else if (this.props.usertype === 'agency'){
            return <Chart />
        }
    }
    render(){
        $('html, body').scrollTop(0);
        return (
            <div>
                {this.IsReRenderNeeded()}
                {this.IsUserLoggedIn()}
                <LoginModal />
                <RegisterModal />
                <RegisAgencyModal />
                {this.ChooseHomeContent()}
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
export default connect(mapStateToProps, mapDispatchToProps)(Home);