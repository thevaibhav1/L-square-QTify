// Navbar component
import React from "react";
import style from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Search from "../Search";
import GiveButton from "../GiveButton";
// import Searchbar from "../Searchbar";
function Navbar() {
  return (
    <div className={`${style.navbar}`}>
      <div className={style.logo}>
        <Logo />
      </div>
      <Search />
      <GiveButton />
    </div>
  );
}

export default Navbar;
