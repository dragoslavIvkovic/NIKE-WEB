import React, { useState } from 'react'
import { FaBars, FaTimes, FaSmileBeam } from 'react-icons/fa';
import Home from "./page/Home"
import Products from "./page/Products"
import Services from "./page/Services"
import About from "./page/About"
import ContactUs from "./page/ContactUs"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
                            <li className='nav-item'>
                                <Link
                                    to='/About'
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                >
                                    About
                  </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    to='/ContactUs'
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                >
                                    Contact Us
                  </Link>
                            </li>


                        </ul>

                    </div>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/Products" exact component={Products} />
                        <Route path="/Services" exact component={Services} />
                        <Route path="/About" exact component={About} />
                        <Route path="/ContactUs" exact component={ContactUs} />
                    </Switch>
                </nav>
            </Router>
        </>
    );
}

export default Navbar;