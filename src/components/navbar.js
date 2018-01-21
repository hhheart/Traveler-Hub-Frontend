import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () =>{    
    return (
        <nav className="navbar navbar-expand-lg navbar-white">
            <img className="navbar-brand" 
                alt="_LOGO_"
                style={{width:'12vw',height:'10vh'}} 
                src={require('../static/images/logo_2.png')} />
            <button 
                className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarNav" 
                aria-controls="navbarNav" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
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

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/member/login">ลงชื่อเข้าใช้</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/member/register">สมัครใช้งาน</Link>
                    </li>
                </ul>
            </div>     
        </nav>
    )  
}

export default Navbar;