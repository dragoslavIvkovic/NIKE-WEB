import React from "react";
import "./AdToCart__btn.css";
import { Link } from "react-router-dom";

function Button() {
  return (
    <Link to="SingIn">
      <button className="Cart_btn">Ad to Cart</button>
    </Link>
  );
}

export default Button;
