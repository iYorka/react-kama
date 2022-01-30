import React from 'react';
import styles from "./messageList.module.css";
import Message from "../Message/Message";
import NewMessage from "../NewMessage/NewMessage";

const MessagesList = ({newDialogMessage, messages, onChangeMessage, onAddMessage}) => {

  return (
    <div>
      <div className={styles.messagesList}>
        {messages.map((message) =>
          <Message
            message={message.message} key = {Math.random()}/>
        )}
      </div>
      <NewMessage newDialogMessage={newDialogMessage}
                  onChangeMessage = {onChangeMessage}
                  onAddMessage={onAddMessage}/>
    </div>
  )
}

export default MessagesList;