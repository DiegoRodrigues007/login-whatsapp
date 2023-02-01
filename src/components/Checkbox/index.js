import React from "react";
import "../Checkbox/Checkbox.css";

const CheckBox = (props) => (
  <input
    className="checkbox"
    type="CheckBox"
    value={props.value}
    onChange={props.onEvent}
  />
);

export default CheckBox;
