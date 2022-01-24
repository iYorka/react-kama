import React from 'react';
import styles from "./header.module.css"
import logo from "./logo.png";

const Header = () => {
  return (
    <div>
      <header className={styles.appHeader}>
        <img className={styles.img} src={logo} alt="logo"/>

      </header>
    </div>
  );
};

export default Header;