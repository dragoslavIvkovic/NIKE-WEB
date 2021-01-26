import React from "react";
import "./Men.css";

import Button from "../../Button/AdToCart__btn";

function MenProps(props) {
  return (
    <div>
      <img src={props.image} alt={props.name} className="img__props" />
      <Button className="btn_MenProps" />
    </div>
  );
}

export default MenProps;
