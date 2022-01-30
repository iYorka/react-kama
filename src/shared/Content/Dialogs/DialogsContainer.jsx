import React from 'react';
import {changeMessageTextActionCreator, sendMessageActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapDispatchToProps = (dispatch) => {
  return {
    onAddMessage: () => {
      dispatch(sendMessageActionCreator())
    },

    onChangeMessage: (text) => {
      dispatch(changeMessageTextActionCreator(text))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    newDialogMessage: state.dialogsPage.newDialogMessage,
    messages: state.dialogsPage.messages
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;