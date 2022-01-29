import React from 'react';
import styles from "./dialogs.module.css";
import DialogsList from "./DialogsList/DialogsList";
import MessagesList from "./MessagesList/MessagesList";

const Dialogs = ({dialogs, messages, onAddMessage, newDialogMessage, onChangeMessage}) => {
  return (
    <div className={styles.container}>
      <DialogsList dialogs={dialogs}/>
      <MessagesList newDialogMessage={newDialogMessage} messages={messages} onAddMessage={onAddMessage}
                    onChangeMessage={onChangeMessage}/>
    </div>
  );
};

export default Dialogs;