import React from "react";
import searchimage from "../assets/Searchicon.png";
import styles from "./Search.module.css";

function Search() {
  return (
    <div>
      <input
        className={styles.search}
        type="text"
        placeholder="Search a song of your choice"
      />
      <button className={styles.buttondesign} type="submit">
        <img  className={styles.icon} src={searchimage} alt="dd" />
      </button>
    </div>
  );
}

export default Search;
