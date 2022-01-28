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

let store = {
  _state: {
    profilePage: {
      posts: [...postsTempContent],
      newPostText: 'La-la bla bla',
    },
    dialogsPage: {
      dialogs: [...dialogArray],
      messages: [...messagesArray],
    },
    sidebarPage: {}
  },
  _callSubscriber(){
  },
  getState() {
    return this._state
  },
  subscribe(observer){
    this._callSubscriber = observer;
  },
  addPost(){
    let newPost = {
      avatar: undefined,
      likeCount: 0,
      message: this._state.profilePage.newPostText
    }
    this._state.profilePage.posts.push(newPost);
    this.changeText('');
    this._callSubscriber(this._state)
  },
  changeText(newText){
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state)
  },



}

export default store