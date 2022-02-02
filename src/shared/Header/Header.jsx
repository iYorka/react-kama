import React, {useEffect} from 'react';
import styles from "./header.module.css"
import logo from "./logo.png";
import {NavLink} from "react-router-dom";
import axios from "axios";

const Header = ({isLogined, login, email}) => {
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
      <div className={styles.loginContainer}>
        {isLogined == true ? <NavLink to='/profile' className={styles.login}>{login}({email})</NavLink> : <NavLink to='/auth' className={styles.login}>log in</NavLink>}
      </div>
    </header>

  </div>);
};

export default Header;