import React, {Component} from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { test, test2 } from '../actions/index';

import $ from 'jquery';

class Login extends Component{
    render(){
        return (     
            <div>
                <button onClick={()=>this.props.test()}>login success</button>
                <button onClick={()=>this.props.test2()}>log out</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        fact: state.Test
    };
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({test,test2}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);