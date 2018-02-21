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
 import { 
    FACEBOOK_GRAPH_API,
} from '../constants/endpoints';
import { resolve } from 'path';
class Login extends Component{
    constructor() {
        super()
        this.state = {
            email:  '',
            password: '',
            fb_graph_api_rq: '',
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
    getFacebook_API_request(){

    }

    onSubmit_facebook() {
        /*window.FB.logout(function(response) {
            //console.log(response)
            //alert('logged out')
            // user is now logged out
        });*/

        const fb_rq_root = FACEBOOK_GRAPH_API
        let fb_rq = "rq"
        window.FB.getLoginStatus(function(response) {
            if (response.status === 'connected') {
                console.log(response)
                alert('logged in A')
                let fb_rq_tk = fb_rq_root.replace("[id]", response.authResponse.userID) 
                fb_rq = fb_rq_tk.replace("[key]", (response.authResponse.accessToken)) 
                console.log('test-inside: '+ fb_rq)

                this.props.onLogin_facebook(fb_rq,)
            }
            else {
                window.FB.login(function(response) {
                    alert('logged in B')
                    var fb_rq_tk = fb_rq_root.replace("[id]", response.authResponse.userID) 
                    fb_rq = fb_rq_tk.replace("[key]", (response.authResponse.accessToken)) 
                }, {scope: 'email, public_profile'})
            }
        })

         setTimeout(() => {
            console.log('test-outside: '+ fb_rq)
            this.props.onLogin_facebook(fb_rq,)
            .then(function(response){
                console.log(response)
            })
         }, 3000); 
        //console.log('test-outside: '+ this.getFacebook_API_request())
        //window.FB.getAuthResponse()
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