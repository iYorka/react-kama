import React from 'react';
import styles from './newmessage.module.css'

const NewMessage = ({newDialogMessage, onChangeMessage, onAddMessage}) => {

  const changeMessage = (e) => {
    onChangeMessage(e.target.value)
  }
  const sendClick = () => {
    onAddMessage()
  }

  return (
    <div className={styles.container}>
      <textarea onChange={changeMessage} className={styles.input} value={newDialogMessage}/>
      <button onClick={sendClick} className={styles.button}> send message</button>
    </div>
  );
};

export default NewMessage;