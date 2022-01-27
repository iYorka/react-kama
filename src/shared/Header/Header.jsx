import React from 'react';
import styles from "./header.module.css"
import logo from "./logo.png";
import {Link, NavLink} from "react-router-dom";

const Header = () => {
  return (<div>

    <header className={styles.appHeader}>
      <NavLink to="/">
        <img className={styles.img} src={logo} alt="logo"/>
      </NavLink>
      <div>
        alalala
      </div>
      <div>
        alala
      </div>
      <div>
        alala
      </div>

    </header>

  </div>);
};

export default Header;