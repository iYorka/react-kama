import React from 'react';
import styles from "./messageList.module.css";
import Message from "../Message/Message";
import {useLocation} from "react-router";

const MessagesList = ({messages}) => {
  let location = useLocation();
  console.log(location)
  return (

    <div className={styles.messagesList}>
      {messages.map((message) =>
        <Message
          message={message.message}/>
      )}
    </div>
  )
}

export default MessagesList;