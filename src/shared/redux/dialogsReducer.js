const SEND_MESSAGE = 'SEND-MESSAGE';
const CHANGE_MESSAGE_TEXT = 'CHANGE-MESSAGE-TEXT';

const messagesArray = [
  {userID: 'user1', name: 'User 1', message: 'Blah blah blah'},
  {userID: 'user1', name: 'User 1', message: 'Blah blah blah again'},
  {userID: 'user666', name: 'my Ex', message: 'Call me, maybe'},
  {userID: 'user666', name: 'my Ex', message: 'We need to talk!!! '},
  {userID: 'user2', name: 'best friend', message: 'Dont call her!!! Its a trap!!!!'},
]

const dialogArray = [
  {avatar: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png', name: 'User 1', userID: 'user1'},
  {
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png',
    name: 'best friend',
    userID: 'user2'
  },
  {avatar: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png', name: 'my EX', userID: 'user666'}]

const initialState = {
  dialogs: [...dialogArray],
  messages: [...messagesArray],
  newDialogMessage: 'Well, hello...'
}

export const dialogsReducer = (state = initialState, action) => {
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