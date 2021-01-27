import React from "react";
import "./Men.css";

import Button from "../../Button/AdToCart__btn";

function MenProps(props) {
  return (
    <div className="props_img">
      <img
        src={props.imageSource}
        alt={props.name}
        className="img__props"
        width="150px"
      />
      <h2>{props.name}</h2>
      <p>{props.bio}</p>
      <Button className="btn_MenProps" />
    </div>
  );
}

export default MenProps;
