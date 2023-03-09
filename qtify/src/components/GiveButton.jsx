import React from "react";
import styleb from "./GiveButton.module.css";
function GiveButton() {
  return (
    <button className={styleb.givebutton}>
      <span className={styleb.text}>Give Feedback</span>
    </button>
  );
}

export default GiveButton;
