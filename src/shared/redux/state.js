import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

const postsTempContent = [
  {message: 'Hi, bro, its first post', likeCount: 33, avatar: undefined},
  {message: 'Hi, bro, its second post', likeCount: 1488, avatar: undefined},
  {
    message: 'Hi, bro, its third post',
    likeCount: -3,
    avatar: "https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png"
  }];
const dialogArray = [
  {avatar: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png', name: 'User 1', userID: 'user1'},
  {
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png',
    name: 'best friend',
    userID: 'user2'
  },
  {avatar: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png', name: 'my EX', userID: 'user666'}]
const messagesArray = [
  {userID: 'user1', name: 'User 1', message: 'Blah blah blah'},
  {userID: 'user1', name: 'User 1', message: 'Blah blah blah again'},
  {userID: 'user666', name: 'my Ex', message: 'Call me, maybe'},
  {userID: 'user666', name: 'my Ex', message: 'We need to talk!!! '},
  {userID: 'user2', name: 'best friend', message: 'Dont call her!!! Its a trap!!!!'},
]

const ADD_POST = 'ADD-POST';
const CHANGE_TEXT = 'CHANGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const CHANGE_MESSAGE_TEXT = 'CHANGE-MESSAGE-TEXT';

let store = {
  _state: {
    profilePage: {
      posts: [...postsTempContent],
      newPostText: 'La-la bla bla',
    },
    dialogsPage: {
      dialogs: [...dialogArray],
      messages: [...messagesArray],
      newDialogMessage: 'Well, hello...'
    },
    sidebarPage: {}
  },
  _callSubscriber() {
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this.getState().profilePage, action)
    this._state.sidebarPage = sidebarReducer(this.getState().sidebarPage, action)
    this._state.dialogsPage = dialogsReducer(this.getState().dialogsPage, action)
    this._callSubscriber(this._state)


  }
}





export default store