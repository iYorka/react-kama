import React from 'react';
import styles from "./dialogsList.module.css";
import DialogsItem from "../DialogsItem/DialogsItem";

const DialogsList = ({dialogs}) => {
  return (
    <div className={styles.dialogList}>
      {dialogs.map((dialog) =>
        <DialogsItem avatar={dialog.avatar} userID={dialog.userID} name={dialog.name}/>
      )}
    </div>
  )
}

export default DialogsList;