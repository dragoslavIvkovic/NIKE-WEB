import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaPizzaSlice } from 'react-icons/fa';
import FullMenu from "./page/FullMenu"
import Desserts from "./page/Desserts"
import Pizzas from "./page/Pizzas"
import { IconContext } from "react-icons"

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button } from './Button';
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);



    return (
        <>
            <Router>
                <nav className='navbar'>
                    <div className='navbar-container'>
                        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                            <IconContext.Provider value={{ style: { fontSize: '4rem', color: "wheat" } }}>

                                <FaPizzaSlice />
                            </IconContext.Provider>
                        </Link>
                        <IconContext.Provider value={{ style: { fontSize: '2rem', color: "wheat" } }}>

                            <div className='menu-icon' onClick={handleClick}>
                                {click ? <FaTimes /> : <FaBars />}

                            </div>
                        </IconContext.Provider>

                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                            <li className='nav-item'>

                                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                    FullMenu
                  </Link>
                            </li>

                            <li className='nav-item'>
                                <Link
                                    to='/Desserts'
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                >
                                    Desserts
                  </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    to='/Pizzas'
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                >
                                    Pizzas
                  </Link>
                            </li>

                            <li className='nav-item'>
                                <Link
                                    to='/Orders'
                                    className='nav-links-mobile'
                                    onClick={closeMobileMenu}
                                >
                                    ORDER NOW
                  </Link>

                            </li>


                        </ul>
                        {button && <Button buttonStyle='btn--outline'>ORDER NOW</Button>}
                    </div>
                    <Switch>
                        <Route path="/" exact component={FullMenu} />
                        <Route path="/Desserts" exact component={Desserts} />

                        <Route path="/Pizzas" exact component={Pizzas} />

                    </Switch>
                </nav>
            </Router>
        </>
    );
}

export default Navbar;