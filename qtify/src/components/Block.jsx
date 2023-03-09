import React from "react";
import style from "./Block.module.css";
function Block() {
  return (
    <div className={style.block}>
      <div className={style.innerblock}>
        <h2 className={style.textcolor}>100 Thousand Songs, ad-free</h2>
        <h2 className={style.textcolor}>Over thousands podcast episodes</h2>
      </div>
    </div>
  );
}
export default Block;
