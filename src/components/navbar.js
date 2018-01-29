import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { test, test2 } from '../actions/index';

import LoginModal from '../components/login';

import '../static/css/nav.css'

class Navbar extends Component{
    renderUserContent(){
        if (this.props.fact === true){
            return (
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        GUEST
                    </li>
                    <li className="nav-item">
                        <button>logout</button>
                        
                    </li>
                </ul>
            )
        }
        else {
            return (
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item ">
                        <LoginModal />
                        <a className="nav-link" href="" data-toggle="modal" data-target="#myModal">ลงชื่อเข้าใช้</a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/member/register">สมัครใช้งาน</Link>
                        
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/member/login">test-login</Link>
                        
                    </li>
                </ul>
            )
        }
    }
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
                <img className="navbar-brand navbar-logo-size" 
                    alt="_LOGO_" 
                    src={require('../static/images/logo_2.png')} />
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                <span className="navbar-dark navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">หน้าแรก</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/package">แพ็คเกจทั้งหมด</Link>
                        </li>
                    </ul>
    
                    {this.renderUserContent()}

                </div>     
            </nav>
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
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);