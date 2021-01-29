import React from "react";
import "./Men.css";
import RadialCh from "../../Button/RadialCh";
import Button from "../../Button/AdToCart__btn";

function MenProps(props) {
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
      <Button className="btn_MenProps" />
    </div>
  );
}

export default MenProps;
