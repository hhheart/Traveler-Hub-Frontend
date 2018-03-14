import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {URL_ROOT} from '../constants/endpoints';
import LoginModal from '../containers/login';
import '../static/css/nav.css'

export class NavbarView extends Component{ 
    renderLogoutModal(){
        return(
            <div className="modal fade" id="logoutModal" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">ยืนยันที่จะลงชื่อออก !</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">ยกเลิก</button>
                        <button 
                            type="button" 
                            data-dismiss="modal"
                            className="btn btn-outline-danger" 
                            onClick={this.props.handleLogout} >ลงชื่อออก</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
    renderImageProfile(){
        if (this.props.image){
            return <img src={this.props.image} alt="ProfileImage" 
                className="" style={{width:50+'px',height:50+'px'}}/>
        }
        else {
            return <img src={require("../static/images/user.png")} alt="ProfileImage" 
                className="" style={{width:50+'px',height:50+'px'}}/>
        }
    }
    renderUserContent(){
        if (localStorage.getItem("login_token")){
            return (
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                    {this.renderImageProfile()}
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        {this.props.email}
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="/member/profile">ข้อมูลผู้ใช้งาน</Link>   
                        <div className="dropdown-divider text-center"></div>
                            <button
                                className="btn btn-outline-danger btn-logout-layout"
                                data-toggle="modal" 
                                data-target="#logoutModal"
                            >ลงชื่อออก</button>  
                        </div>
                    </li>
                </ul>
            )
        }
        else {
            return (
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item ">
                        <a className="nav-link" href="" data-toggle="modal" data-target="#loginModal">ลงชื่อเข้าใช้</a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/member/register">สมัครใช้งาน</Link>      
                    </li>
                </ul>
            )
        }
    }
    render(){
        return (
            <div>
                <LoginModal />
                {this.renderLogoutModal()}
                <nav className="navbar navbar-expand-lg navbar-light bg-white">
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
                    <div className="collapse navbar-collapse bg-white" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to={`${URL_ROOT}`}>หน้าแรก</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/package/page=${1}`}>แพ็คเกจทั้งหมด</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/package/search/page=${1}`}>ค้นหาแพ็คเกจ</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/`}>เกี่ยวกับเรา</Link>
                            </li>
                        </ul>
                        {this.renderUserContent()}
                    </div>     
                </nav>
            </div>
        ) 
    }     
}