const SEND_MESSAGE = 'SEND-MESSAGE';
const CHANGE_MESSAGE_TEXT = 'CHANGE-MESSAGE-TEXT';

export const dialogsReducer = (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        userID: 'user1',
        name: 'User 1',
        message: state.newDialogMessage
      };
      state.messages.push(newMessage);
      state.newDialogMessage = '';
      return state
    case CHANGE_MESSAGE_TEXT:
      state.newDialogMessage = action.newText;
      return state
    default:
      return state
  }
}

export const sendMessageActionCreator = () => ({
  type: SEND_MESSAGE
})

export const changeMessageTextActionCreator = (newText) => ({
  type: CHANGE_MESSAGE_TEXT,
  newText: newText
})


export default dialogsReducer