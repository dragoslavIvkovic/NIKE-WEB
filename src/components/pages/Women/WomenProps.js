import React from "react";
import "./Women.css";
import RadialCh from "../../Button/RadialCh";

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
      <RadialCh />
      <Button className="btn_WomenProps" />
    </div>
  );
}

export default WomenProps;
