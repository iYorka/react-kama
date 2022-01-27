import React from 'react';
import {NavLink} from "react-router-dom";
import styles from "./dialogItem.module.css";

const DialogsItem = ({name, avatar, userID}) => {
  return (
    <NavLink to={`/dialogs/${userID}`}>
      <div className={styles.dialogUser}>
        <img className={styles.avatar} src={avatar} alt=""/> {name}
      </div>
    </NavLink>
  )
}

export default DialogsItem;