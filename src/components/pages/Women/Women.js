import React from "react";
import WomenProps from "./WomenProps";
import "./Women.css";

export default function Women() {
  return (
    <div className="Women_container">
      <div className="Women__items">
        <div className="Women__item">
          <WomenProps
            imageSource="./WomenImg/WomenImg (1).png"
            bio="Air Max 270"
            price="300 $"
          />
        </div>
        <div className="Women__item">
          <WomenProps
            imageSource="./WomenImg/WomenImg (2).png"
            bio="Air Max 270"
            price="300 $"
          />
        </div>

        <div className="Women__item">
          <WomenProps
            imageSource="./WomenImg/WomenImg (3).png"
            bio="Air Max 270"
            price="300 $"
          />
        </div>
        <div className="Women__item">
          <WomenProps
            imageSource="./WomenImg/WomenImg (4).png"
            bio="Air Max 270"
            price="300 $"
          />
        </div>
        <div className="Women__item">
          <WomenProps
            imageSource="./WomenImg/WomenImg (5).png"
            bio="Air Max 270"
            price="300 $"
          />
        </div>
        <div className="Women__item">
          <WomenProps
            imageSource="./WomenImg/WomenImg (6).png"
            bio="Air Max 270"
            price="300 $"
          />
        </div>
        <div className="Women__item">
          <WomenProps
            imageSource="./WomenImg/WomenImg (7).png"
            bio="Air Max 270"
            price="300 $"
          />
        </div>
        <div className="Women__item">
          <WomenProps
            imageSource="./WomenImg/WomenImg (8).png"
            bio="Air Max 270"
            price="300 $"
          />
        </div>
      </div>
    </div>
  );
}
