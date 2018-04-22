import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { URL_ROOT } from '../constants/endpoints';
import { REQUEST_ROOT } from '../constants/endpoints';
//import LoginModal from '../containers/login';
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
            console.log(this.props.image)
            return <img src={this.props.image} alt="ProfileImage" 
                className="" style={{width:50+'px',height:50+'px'}}/>
        }
        else {
            return <img src={require("../static/images/user.png")} alt="ProfileImage" 
                className="" style={{width:50+'px',height:50+'px'}}/>
        }
    }
    renderUserContent(){   
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <Link to={`${URL_ROOT}`}>
                    <img className="navbar-brand navbar-logo-size" 
                        alt="_LOGO_" 
                        src={require('../static/images/logo_2.png')}
                    />
                </Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label=" navigatioTogglen">
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
                            <Link className="nav-link" to={`/AboutUS`}>เกี่ยวกับเรา</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            {this.renderImageProfile()}
                        </li>
                        <li className="nav-item dropdown" >
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" data-toggle="dropdown">
                                {this.props.email}
                            </a>
                            <div className="dropdown-menu">
                                <Link className="dropdown-item" to="/member/profile"><i className="fa fa-user-circle-o" ></i> ข้อมูลผู้ใช้งาน</Link>   
                                <Link className="dropdown-item" to="/member/bookmark"><i className="fa fa-star" ></i> บุ๊คมาร์ค</Link>  
                                <div className="dropdown-divider text-center"></div>
                                <button
                                    className="btn btn-outline-danger btn-logout-layout"
                                    data-toggle="modal" 
                                    data-target="#logoutModal"
                                >ลงชื่อออก</button>  
                            </div>
                        </li>
                    </ul>
                </div>     
            </nav>
        )   
    }
    renderAgencyContent(){  
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <Link to={`${URL_ROOT}`}>
                    <img className="navbar-brand navbar-logo-size" 
                        alt="_LOGO_" 
                        src={require('../static/images/logo_2.png')}
                    />
                </Link>
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
                            <Link className="nav-link" to={'/agency/line_chart'}>ข้อมูลเข้าชม</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to={'/agency/bar_chart'}>สรุปผู้ใช้งาน</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            {this.renderImageProfile()}
                        </li>
                        <li className="nav-item dropdown" >
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" data-toggle="dropdown">
                                {this.props.email}
                            </a>
                            <div className="dropdown-menu">
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
                </div>     
            </nav>
        )
    }
    ChooseContent(){
        if (localStorage.getItem("login_token")){
            if (this.props.usertype === 'customer')
                return (this.renderUserContent())
            else if (this.props.usertype === 'agency')
                return (this.renderAgencyContent())
        }        
    }
    render(){
        return (
            <div>     
                {this.renderLogoutModal()}
                {this.ChooseContent()}
            </div>
        ) 
    }     
}