import React, {Component} from 'react'; 
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import { withRouter } from 'react-router-dom';
import LoginModal from '../components/login';
import jQuery from 'jquery';
import { 
    onLogin, 
    onLogin_facebook,
    check_token,
    postFB_dataToServer,
 } from '../actions/user';
 import { 
    FACEBOOK_GRAPH_API,
} from '../constants/endpoints';
import '../static/css/social-button.css';
class Login extends Component{
    constructor() {
        super()
        this.state = {
            email:  '',
            password: '',
            fb_graph_api_rq: '',
        }
    }    
    handleClickRegister(){
        jQuery('#RegisterModal').modal('show')
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
        .then((res) => {
            console.log(res)
            if(res.type === 'LOGIN_SUCCESS'){
                window.jQuery = jQuery;
                require('bootstrap')
                jQuery('#loginModal').modal('hide')
                alert('login successful')   
            }
            else (
                //console.log(res.payload.response.user)
                alert('Error: '+res.payload.response.user)
            )
            this.setState({
                email: '',
                password: '',
            })
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
                //get userdata from facebook server
                this.props.onLogin_facebook(this.getFacebook_API_request(result))
                .then( () => {
                    //post userdata to ours own server
                    this.props.postFB_dataToServer({
                        email: this.props.email,
                        userID: localStorage.getItem('fb_userID'),
                        first_name: this.props.first_name,
                        last_name: this.props.last_name,
                        gender: this.props.gender,
                        profileImage: this.props.profile_image,
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
                onClickRegister={this.handleClickRegister.bind(this)}
                email={this.state.email}
                password={this.state.password}
            />
        )
    }
}
function mapStateToProps(state){
    return {
        email: state.user.email,
        first_name: state.user.first_name,
        last_name: state.user.last_name,
        gender: state.user.gender,
        profile_image: state.user.profile_image,
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
export default connect(mapStateToProps, mapDispatchToProps)(Login);