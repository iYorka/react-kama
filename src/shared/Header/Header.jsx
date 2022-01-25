import React from 'react';
import styles from "./header.module.css"
import logo from "./logo.png";

const Header = () => {
  return (<div>
      <header className={styles.appHeader}>
        <img className={styles.img} src={logo} alt="logo"/>
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