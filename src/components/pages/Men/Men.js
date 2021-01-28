import React from "react";
import MenProps from "./MenProps";
import "./Men.css";

export default function Men() {
  return (
    <div className="Men_container">
      <div className="men__items">
        <div className="men__item">
          <MenProps
            name="name"
            imageSource="./MenImg/MenImg (1).png"
            bio="Air Max 270"
            price="300 $"
          />
        </div>
        <div className="men__item">
          <MenProps
            name="name"
            imageSource="./MenImg/MenImg (2).png"
            bio="Air Max 270"
            price="300 $"
          />
        </div>
        <div className="men__item">
          <MenProps
            name="name"
            imageSource="./MenImg/MenImg (3).png"
            bio="Air Max 270"
            price="300 $"
          />
        </div>
        <div className="men__item">
          <MenProps
            name="name"
            imageSource="./MenImg/MenImg (4).png"
            bio="Air Max 270"
            price="300 $"
          />
        </div>
        <div className="men__item">
          <MenProps
            name="name"
            imageSource="./MenImg/MenImg (5).png"
            bio="Air Max 270"
            price="300 $"
          />
        </div>
        <div className="men__item">
          <MenProps
            name="name"
            imageSource="./MenImg/MenImg (6).png"
            bio="Air Max 270"
            price="300 $"
          />
        </div>
        <div className="men__item">
          <MenProps
            name="name"
            imageSource="./MenImg/MenImg (7).png"
            bio="Air Max 270"
            price="300 $"
          />
        </div>
        <div className="men__item">
          <MenProps
            name="name"
            imageSource="./MenImg/MenImg (8).png"
            bio="Air Max 270"
            price="300 $"
          />
        </div>
      </div>
    </div>
  );
}
