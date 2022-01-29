const ADD_POST = 'ADD-POST';
const CHANGE_TEXT = 'CHANGE-TEXT';


const postsTempContent = [
  {message: 'Hi, bro, its first post', likeCount: 33, avatar: undefined},
  {message: 'Hi, bro, its second post', likeCount: 1488, avatar: undefined},
  {
    message: 'Hi, bro, its third post',
    likeCount: -3,
    avatar: "https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png"
  }];

const initialState = {
  posts: [...postsTempContent],
  newPostText: 'La-la bla bla',
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        avatar: undefined,
        likeCount: 0,
        message: state.newPostText
      }
      state.posts.push(newPost);
      state.newPostText = '';
      return state;
    case CHANGE_TEXT:
      state.newPostText = action.newText
      return state;
    default:
      return state
  }
}

export const addPostActionCreator = () => ({
  type: ADD_POST
})

export const changeTextActionCreator = (newText) => ({
  type: CHANGE_TEXT,
  newText: newText
})


export default profileReducer