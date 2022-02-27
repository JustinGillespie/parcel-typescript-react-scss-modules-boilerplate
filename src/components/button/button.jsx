import React from "react";
import * as classes from "./button.module.scss";

function Button({ children, title }) {
  return (
    <button className={classes.button} onClick={() => console.log("lol")}>
      {children || title}
    </button>
  );
}

export default Button;
