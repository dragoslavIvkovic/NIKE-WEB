import React from "react";
import "./Women.css";

import Button from "../../Button/AdToCart__btn";

function WomenProps(props) {
  return (
    <div className="props_img">
      <img
        src={props.imageSource}
        className="img__props"
        alt={props.name}
        width="150px"
      />

      <p>{props.bio}</p>

      <h1>{props.price}</h1>
      <div className="input_radial">
        <input type="checkbox" class="c1" checked />
        <input type="checkbox" class="c2" checked />
        <input type="checkbox" class="c3" checked />
      </div>
      <Button className="btn_WomenProps" />
    </div>
  );
}

export default WomenProps;
