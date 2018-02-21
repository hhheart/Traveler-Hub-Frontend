import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { onLogout, check_token } from '../actions/user';

import { NavbarView } from '../components/navbar';

class Navbar extends Component{
    componentWillMount(){
        this.props.check_token()
        console.log(this.props.image)
    }
    handleLogout(){
        this.props.onLogout()
        window.location.reload();
        console.log('logout pass ')
    }
    render(){
        return (
            <NavbarView 
                isLoggedIn={this.props.isLoggedIn}
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
        email: state.user.email,
        image: state.user.profile_image
    };
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        onLogout,
        check_token,
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);