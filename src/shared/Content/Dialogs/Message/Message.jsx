import React from 'react';
import styles from "./message.module.css";

const Message = ({message}) => {
  return (
    <div className={styles.message}>
      {message}
    </div>
  )
}

export default Message;