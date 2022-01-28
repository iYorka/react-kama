import React from 'react';
import styles from './newmessage.module.css'
import {changeMessageTextActionCreator, sendMessageActionCreator} from "../../../redux/dialogsReducer";

const NewMessage = ({newDialogMessage, dispatch}) => {

  const onMessageChange = (e) => {
    debugger
    dispatch(changeMessageTextActionCreator(e.target.value))
  }
  const onSendClick = () => {
    dispatch(sendMessageActionCreator())
  }

  return (
    <div className={styles.container}>
      <textarea onChange={onMessageChange} className={styles.input} value={newDialogMessage}/>
      <button onClick={onSendClick} className={styles.button}> send message</button>
    </div>
  );
};

export default NewMessage;