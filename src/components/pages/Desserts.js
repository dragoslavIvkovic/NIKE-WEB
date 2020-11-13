import React from "react";
import "./DessertsProps.css";
import { Button } from "../Button";
import { TimelineMax } from 'gsap';

export default function App() {

  const name = document.getElementById('id')

  const tl = new TimelineMax();

  return (
    <div className="app">
      <div className="hover_cards">
        <div className="container">
          <div className="card1">
            <div className="box">
              <div className="content">

               

                <Button />
              </div>
            </div>
          </div>
          <div className="card1">
            <div className="box">
              <div className="content">
              <img src={"https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"} alt="Logo" />;
                <a href>Read More</a>
              </div>
            </div>
          </div>
          <div className="card1">
            <div className="box">
              <div className="content">
                <h2>03</h2>
                <h3>Card Three</h3>
                <p>Lorem ipsum dolor sit amet, consectur adipisicing
                elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua,</p>
                <a href>Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
     
  );
}
