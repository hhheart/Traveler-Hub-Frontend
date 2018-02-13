import React, {Component} from 'react'; 
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import LoginModal from '../components/login';

import '../static/css/social-button.css';
import { 
    onLogin, 
    onLogin_facebook,
    check_token,
 } from '../actions/user';

class Login extends Component{
    constructor() {
        super()
        this.state = {
            email:  '',
            password: '',
        }
    }    
    onEmailChange(event) {
        this.setState({email: event.target.value})
    }
    onPasswordChange(event) {
        this.setState({password: event.target.value})
    }
    onSubmit(event) {
        event.preventDefault()
        this.props.onLogin({
            email: this.state.email,
            password: this.state.password
        })
        .then(function (response) {
            console.log(response);
        })
    }
    onSubmit_facebook() {
        this.props.onLogin_facebook()
        .then(function(response){
            console.log(response)
        })
    }
    render(){
        return (     
            <LoginModal  
                onEmailChange={this.onEmailChange.bind(this)}
                onPasswordChage={this.onPasswordChange.bind(this)}
                onSubmit={this.onSubmit.bind(this)}
                onSubmit_facebook={this.onSubmit_facebook.bind(this)}
            />
        )
    }
}

function mapStateToProps(state){
    return {
        isLoggedIn: state.user.isLoggedIn,
        role: state.user.role,
        email: state.user.email,
        token_id: state.user.token_id,
    };
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        onLogin,
        onLogin_facebook,
        check_token,
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);