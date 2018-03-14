import React, {Component} from 'react'; 
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LoginModal from '../components/login';

import '../static/css/social-button.css';
import { 
    onLogin, 
    onLogin_facebook,
    check_token,
    postFB_dataToServer,
 } from '../actions/user';
 import { 
    FACEBOOK_GRAPH_API,
} from '../constants/endpoints';
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
            password: this.state.password,
        })
        .then(function (response) {
            alert('You are loggedIn!')
            console.log(response);
        })
    }
    getFacebook_API_request = (response) =>{
        const fb_rq_template = FACEBOOK_GRAPH_API
        localStorage.setItem('fb_userID',response.authResponse.userID)
        localStorage.setItem('fb_accessToken',response.authResponse.accessToken)

        var fb_rq_tk = fb_rq_template.replace("[id]", response.authResponse.userID) 
        var fb_rq = fb_rq_tk.replace("[key]", (response.authResponse.accessToken)) 
        return fb_rq
    }
    onSubmit_facebook() {
        function asyncTest(){
            return new Promise(function(resolve,reject){
                window.FB.getLoginStatus(response => {
                    console.log(response.status)
                    if (response.status === 'connected'){
                        alert('You are loggedIn with Facebook !')
                        resolve(response)
                    }
                    else if (response.status === 'not_authorized'||
                             response.status === 'unknown'){
                        window.FB.login(loginRes => {
                            if (loginRes.status === 'connected'){
                                alert('You are loggedIn with Facebook !')
                                resolve(loginRes)
                            }
                            else reject('login not success')
                        },{scope: 'email, public_profile'})
                    } 
                    else {
                        reject('status failure')
                    }
                })
            });
        }
        asyncTest()
            .then((result) =>{
                this.props.onLogin_facebook(this.getFacebook_API_request(result))
                .then( userData => {
                    //console.log(userData)
                    this.props.postFB_dataToServer({
                        email: userData.payload.email,
                        userID: localStorage.getItem('fb_userID'),
                        firstname: userData.payload.first_name,
                        lastname: userData.payload.last_name,
                        profileImage: userData.payload.picture.data.url,
                    })
                    .then(response => {
                        //console.log(response.payload)
                        localStorage.setItem('login_token', response.payload.token)
                    })
                })
            })
            .catch((error) => {
                alert(error)
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
        email: state.user.email,
        token_id: state.user.token_id,
    };
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        onLogin,
        onLogin_facebook,
        postFB_dataToServer,
        check_token,
    }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));