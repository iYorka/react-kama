import React from 'react';
import styles from "./messageList.module.css";
import Message from "../Message/Message";
import {useLocation} from "react-router";
import NewMessage from "../NewMessage/NewMessage";

const MessagesList = ({newDialogMessage, messages, dispatch}) => {
  let location = useLocation();
  return (
    <div>
      <div className={styles.messagesList}>
        {messages.map((message) =>
          <Message
            message={message.message}/>
        )}
      </div>
      <NewMessage newDialogMessage={newDialogMessage} dispatch={dispatch}/>
    </div>
  )
}

export default MessagesList;