import React from "react";

const Button = (props) => {
  return (
    <div>
      <button onClick={props.onclickF}>Convert to Fahrenheit</button>
      <button onClick={props.onclickK}>Convert to Kelvin</button>
    </div>
  );
};

export default Button;