import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () =>{    
    return (
        <nav className="navbar navbar-expand-lg navbar-white">
            <img className="navbar-brand" 
                alt="_LOGO_"
                style={{width:'15vw',height:'12vh'}} 
                src={require('../static/images/logo.png')} />
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
                        <Link className="nav-link" to="/package">แพ็คเกจ</Link>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">ลงชื่อเข้าใช้</a>
                    </li>
                </ul>
            </div>
        </nav>
    )  
}

export default Navbar;