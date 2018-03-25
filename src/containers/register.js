import React, {Component} from 'react'; 
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import RegisterModal from '../components/register';
import { 
    //onLogin, 
    //onLogin_facebook,
    //check_token,
    //postFB_dataToServer,
 } from '../actions/user';
class Register extends Component{
    constructor() {
        super()
        this.state = {
        }
    }    
    render(){
        return (     
            <RegisterModal />
        )
    }
}
function mapStateToProps(state){
    return {
    };
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);