
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";
import { ReactComponent as Logo } from '../../images/Logo.svg';
import Button from '../Button/Button'


function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>


          <Logo className="logo_svg" />

        </Link>
        <IconContext.Provider
          value={{ style: { fontSize: "2rem", color: "wheat" } }}
        >
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
        </IconContext.Provider>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {/*<li className="nav-item">
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            Home
          </Link>
        </li>*/}
          <li className="nav-item">
            <Link to="/Kids" className="nav-links" onClick={closeMobileMenu}>
              Kids
            </Link>
          </li>



          <li className="nav-item">
            <Link
              to="/Men"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Men
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Women"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Women
            </Link>
          </li>
          <li className="nav-item">
            <Link
            ><Button />

            </Link>
          </li>

        </ul>

      </nav>
    </>
  );
}

export default Navbar;
