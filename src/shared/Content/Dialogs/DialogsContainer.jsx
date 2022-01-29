import React from 'react';
import {changeMessageTextActionCreator, sendMessageActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = ({store}) => {
  const dialogs = store.getState().dialogsPage.dialogs;
  const newDialogMessage = store.getState().dialogsPage.newDialogMessage;
  const messages = store.getState().dialogsPage.messages;

  const onAddMessage = () => {
    store.dispatch(sendMessageActionCreator())
  }

  const onChangeMessage = (text) => {
    store.dispatch(changeMessageTextActionCreator(text))
  }

  return (
    <Dialogs
      onChangeMessage={onChangeMessage}
      onAddMessage={onAddMessage}
      dialogs={dialogs}
      messages={messages}
      newDialogMessage={newDialogMessage}/>
  );
};

export default DialogsContainer;