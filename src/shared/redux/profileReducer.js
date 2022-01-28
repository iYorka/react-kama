const ADD_POST = 'ADD-POST';
const CHANGE_TEXT = 'CHANGE-TEXT';

export const profileReducer = (state, action) => {
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