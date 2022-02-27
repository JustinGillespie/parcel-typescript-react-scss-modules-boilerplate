import React from "react";
import * as style from "./button.module.scss";

function Button({ children, title }) {
  return (
    <button
      className={style["btn"]}
      onClick={() => {
        console.log("The button was clicked.");
      }}
    >
      {children || title}
    </button>
  );
}

export default Button;
