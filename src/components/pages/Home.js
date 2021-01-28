import React from "react";
import "../../App.css";
import "./Home.css";
import Discount_Img from "../images/Discount_Img.png";
import AddToCart__btn from "../Button/AdToCart__btn";

export default function Home() {
  return (
    <>
      <div className="home_container">
        <img src={Discount_Img} className="Discount_Img" alt="Discount_Img" />
        <div className="text_container">
          <h1 className="nike_text">NIKE N9</h1>
          <h1 className="header_discount">Hybrid 3X Power</h1>
          <h2 className="text_discount">Nike's Having A Big Sneaker Salep</h2>
          <h2 className="text_discount">In Case You Want New Kicks For 2021</h2>
          <div className="btn_Cart">
            <AddToCart__btn />
          </div>
        </div>

        <div className="lines_v_h">
          <div className="vertical_line"></div>
        </div>
      </div>
    </>
  );
}
