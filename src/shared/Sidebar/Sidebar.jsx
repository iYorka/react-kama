import React from 'react';
import styles from "./Sidebar.module.css"

const Sidebar = () => {
  return (
    <div className={styles.appSidebar}>
      <div className={styles.item}>
        <a href="#"> Profile </a>
      </div>
      <div className={styles.item}>
        <a href="#"> Messages </a>
      </div>
      <div className={styles.item}>
        <a href="#"> News </a>
      </div>
      <div className={styles.item}>
        <a href="#"> Music </a>
      </div>
      <div className={styles.item}>
        <a href="#"> settings </a>
      </div>
    </div>
  );
};

export default Sidebar;