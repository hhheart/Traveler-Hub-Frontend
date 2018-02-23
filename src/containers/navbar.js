import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { 
    onLogout, 
    onLogoutFB,
    delete_fb_app_permission, 
    check_token 
} from '../actions/user';

import { NavbarView } from '../components/navbar';

class Navbar extends Component{
    componentWillMount(){
        this.props.check_token()
        .then(()=>{
            console.log('isLoggedIn: '+this.props.isLoggedIn)
            console.log('fbLoggedIn: '+this.props.fbLoggedIn)
        })
    }
    handleLogout(){
        if (this.props.fbLoggedIn && this.props.isLoggedIn){
            this.props.delete_fb_app_permission()
            .then(Response => {
                console.log('fb deleted permission && logout apps')
            })
        }
        else {
            this.props.onLogout()
            console.log('normal logout')
            window.location.reload();
        }
    }
    render(){
        return (
            <NavbarView 
                email={this.props.email}
                image={this.props.image}
                handleLogout={this.handleLogout.bind(this)}
            />
        ) 
    }     
}
function mapStateToProps(state){
    return {
        isLoggedIn: state.user.isLoggedIn,
        fbLoggedIn: state.user.fbLoggedIn,
        email: state.user.email,
        image: state.user.profile_image
    };
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        onLogout,
        onLogoutFB,
        delete_fb_app_permission,
        check_token,
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);