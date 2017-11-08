import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () =>{    
    return (
        <ul className="nav">
            <li className="nav-item">
                <a className="nav-link disabled" href="#">TravelerHUB</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" href="#">Search</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" href="#">Forum</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" href="#">AboutUS</a>
            </li>
        </ul>
    )  
}

export default Navbar;