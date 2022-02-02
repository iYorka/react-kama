const ADD_POST = 'ADD-POST';
const CHANGE_TEXT = 'CHANGE-TEXT';
const SET_PROFILE_DATA = 'SET_PROFILE_DATA';
const SET_PROFILE_IS_LOADING = 'SET_PROFILE_IS_LOADING';

const postsTempContent = [
  {message: 'Hi, bro, its first post', likeCount: 33, avatar: undefined},
  {message: 'Hi, bro, its second post', likeCount: 1488, avatar: undefined},
  {
    message: 'Hi, bro, its third post',
    likeCount: -3,
    avatar: "https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png"
  }];

const initialState = {
  profile: {
    name: '',
    avatar: '',
    status: '',
    age: '',
    info: '',
    id: ''
  },
  posts: [...postsTempContent],
  newPostText: 'La-la bla bla',
  isLoading: false
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        avatar: undefined,
        likeCount: 0,
        message: state.newPostText
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      };
    case CHANGE_TEXT:

      return {
        ...state,
        newPostText: action.newText
      };
    case SET_PROFILE_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };
    case SET_PROFILE_DATA:
      return  {
        ...state,
        ...action.profile
      }
    default:
      return state
  }
}

export const addPost = () => ({
  type: ADD_POST
})

export const changeText = (newText) => ({
  type: CHANGE_TEXT,
  newText: newText
})

export const setProfileData = (profile) => ({
  type: SET_PROFILE_DATA,
  profile: profile
})

export const setProfileIsLoading = (isLoading) => ({
  type: SET_PROFILE_IS_LOADING,
  isLoading: isLoading
})

export default profileReducer