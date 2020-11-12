
import React, { useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes, FaPizzaSlice } from "react-icons/fa";
import { IconContext } from "react-icons";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <IconContext.Provider
            value={{ style: { fontSize: "4rem", color: "wheat" } }}
          >
            <FaPizzaSlice />
          </IconContext.Provider>
        </Link>
        <IconContext.Provider
          value={{ style: { fontSize: "2rem", color: "wheat" } }}
        >
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
        </IconContext.Provider>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Pizzas" className="nav-links" onClick={closeMobileMenu}>
              Pizzas
            </Link>
          </li>



          <li className="nav-item">
            <Link
              to="/FullMenu"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              FullMenu
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Desserts"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Desserts
            </Link>
          </li>
          <li>
            <Link
              to="/order-now"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Order Now
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
