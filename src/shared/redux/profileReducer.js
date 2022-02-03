import emptyAvatar from "../../assets/images/empty.png";
import * as api from "../../api/api";

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
      return {
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

export const setProfile = (userID) => (dispatch) => {
  dispatch(setProfileIsLoading(true))
  api.getUserProfile(userID)
    .then((data) => {
      dispatch(setProfileData({
        profile: {
          id: userID,
          name: data.fullName,
          avatar: data.photos.small ? data.photos.small : emptyAvatar,
          status: 'status',
          age: 'unknown',
          info: data.lookingForAJob ? 'Looking for job' : 'Not looking for job'
        }
      }))
      dispatch(setProfileIsLoading(false))
    })
}

export const setMyProfile = (isLogined) => (dispatch) => {
  dispatch(setProfileData(
    isLogined ? ({
      profile: {
        id: 0,
        name: 'Me',
        avatar: 'https://99px.ru/sstorage/56/2013/02/mid_88793_9191.jpg',
        status: 'Bla bla bla',
        age: 'My real age',
        info: 'Looking for a good job'
      }
    }) : ({
      profile: {
        id: 0,
        name: 'NONE',
        avatar: 'https://99px.ru/sstorage/56/2013/02/mid_88793_9191.jpg',
        status: 'NONE',
        age: 'NONE',
        info: 'NONE'
      }
    })))
}

export default profileReducer