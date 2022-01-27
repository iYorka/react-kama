import React from 'react';
import styles from "./dialogs.module.css"
import DialogsList from "./DialogsList/DialogsList";
import MessagesList from "./MessagesList/MessagesList";

const Dialogs = ({dialogs, messages}) => {


  return (
    <div className={styles.container}>
      <DialogsList dialogs={dialogs}/>
      <MessagesList messages={messages}/>
    </div>
  );
};

export default Dialogs;