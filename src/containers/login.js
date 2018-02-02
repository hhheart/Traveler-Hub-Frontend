import React, {Component} from 'react';
import '../static/css/social-button.css'; 

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import LoginModal from '../components/login';

import { test, test2 } from '../actions/index';

import { onLogin } from '../actions/user';

class Login extends Component{

    constructor() {
        super()
        this.state = {
            username:  '',
            password: ''
        }
    }    
    onEmailChange(event) {
        this.setState({username: event.target.value})
    }
    
      onPasswordChange(event) {
        this.setState({password: event.target.value})
    }
    onSubmit(event) {
        event.preventDefault()
        console.log('submiting')
        console.log(JSON.stringify({
            username: this.state.username,
            password: this.state.password
          }))
        this.props.onLogin({
          username: this.state.username,
          password: this.state.password
        })
        
        console.log('submited')
    }
    render(){
        return (     
            <LoginModal  
                onEmailChange={this.onEmailChange.bind(this)}
                onPasswordChage={this.onPasswordChange.bind(this)}
                onSubmit={this.onSubmit.bind(this)}
            />
        )
    }
}

function mapStateToProps(state){
    return {
        fact: state.Test
    };
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        test,
        test2,
        onLogin,
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);