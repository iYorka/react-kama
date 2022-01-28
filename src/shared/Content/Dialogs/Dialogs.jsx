import React from 'react';
import styles from "./dialogs.module.css"
import DialogsList from "./DialogsList/DialogsList";
import MessagesList from "./MessagesList/MessagesList";

const Dialogs = ({dialogProps: {dialogs, messages, newDialogMessage}, dispatch}) => {
  return (
    <div className={styles.container}>
      <DialogsList dialogs={dialogs}/>
      <MessagesList newDialogMessage={newDialogMessage} messages={messages} dispatch = {dispatch}/>
    </div>
  );
};

export default Dialogs;