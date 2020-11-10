import React, { useState } from 'react'
import { FaBars, FaTimes, FaSmileBeam } from 'react-icons/fa';
import Home from "./page/Home"
import Products from "./page/Products"
import Services from "./page/Services"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './Navbar.css'
function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);



    return (
        <>
            <Router>
                <nav className='navbar'>
                    <div className='navbar-container'>
                        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>

                            <FaSmileBeam />
                        </Link>
                        <div className='menu-icon' onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                    Home
                  </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    to='/Services'
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                >
                                    Services
                  </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    to='/Products'
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                >
                                    Products
                  </Link>
                            </li>


                        </ul>

                    </div>
                </nav>
            </Router>
        </>
    );
}

export default Navbar;