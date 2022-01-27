import React from 'react';
import styles from "./Sidebar.module.css"
import {Link, NavLink} from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className={styles.appSidebar}>
      <div className={styles.item}>
        <NavLink to="/profile" className={({isActive}) =>`${isActive ? styles.activeLink : ''}`}> Profile </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/dialogs" className={({isActive}) =>`${isActive ? styles.activeLink : ''}`}> Messages </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/news" className={({isActive}) =>`${isActive ? styles.activeLink : ''}`}> News </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/music" className={({isActive}) =>`${isActive ? styles.activeLink : ''}`}> Music </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/settings" className={({isActive}) =>`${isActive ? styles.activeLink : ''}`}> settings </NavLink>
      </div>
    </nav>
  );
};

export default Sidebar;