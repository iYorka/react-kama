import * as api from "../../api/api";

const ADD_USER = 'ADD_USER';
const SEARCH_USER = 'SEARCH_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const FOLLOW_USER = 'FOLLOW_USER';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_IS_LOADING = 'SET_IS_LOADING';
const SET_IS_UPDATING_NOW = 'SET_IS_UPDATING_NOW';
const SET_IS_UPDATED = 'SET_IS_UPDATED';

const initialState = {
  users: [],
  currentPage: 1,
  totalUsersCount: 0,
  pageSize: 25,
  isLoading: false,
  isUpdatingNow: []
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_USER:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.user_id) {
            return {...user, followed: true}
          }
          return user
        })
      }
    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.currentPage}
    case UNFOLLOW_USER:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.user_id) {
            return {...user, followed: false}
          }
          return user
        })
      }
    case SET_USERS:
      return {...state, users: [...action.users], totalUsersCount: action.totalUsersCount}
    case ADD_USER:

      return {
        ...state,
      };
    case SET_IS_UPDATING_NOW:
      state.isUpdatingNow.push(action.id)
      return {...state, isUpdatingNow: [...state.isUpdatingNow]}
    case SET_IS_UPDATED:
      return {...state, isUpdatingNow: state.isUpdatingNow.filter((el) => el !== action.id)}
    case SEARCH_USER:
    case SET_IS_LOADING:
      return {...state, isLoading: action.isLoading}
    default
    :
      return state
  }
}

export const addUser = () => ({
  type: ADD_USER
})

export const setIsLoading = (isLoading) => ({
  type: SET_IS_LOADING,
  isLoading: isLoading
})

export const followUser = (id) => ({
  type: FOLLOW_USER,
  user_id: id
})

export const unfollowUser = (id) => ({
  type: UNFOLLOW_USER,
  user_id: id
})

export const setUsers = (users, totalUsersCount) => ({
  type: SET_USERS,
  users: users,
  totalUsersCount: totalUsersCount
})

export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage: currentPage
})

export const setIsUpdatingNow = (userID) => ({
  type: SET_IS_UPDATING_NOW,
  id: userID
})

export const setIsUpdated = (userID) => ({
  type: SET_IS_UPDATED,
  id: userID
})

export const searchUserActionCreator = (name = '', id = 0) => ({
  type: SEARCH_USER,
  name: name,
  id: id
})

export const getUsers = (currentPage, pageSize) => (dispatch) => {
  dispatch(setIsLoading(true));
  api.getUsers(currentPage, pageSize).then(data => {
    const tempUsers = []
    data.items.map(
      dataItem => {
        tempUsers.push({
          id: dataItem.id,
          followed: dataItem.followed,
          name: dataItem.name,
          avatar: dataItem.photos.small ? dataItem.photos.small : 'https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png',
          location: {city: 'Unsetted', country: 'Unsetted'},
          status: dataItem.status
        })
      })
    dispatch(setUsers(tempUsers, data.totalCount))
    dispatch(setIsLoading(false));
  })
}

export const followUserThunk = (userID) => (dispatch) => {
  dispatch(setIsUpdatingNow(userID))
  api.postFollow(userID).then((data) => {
    if (data.resultCode == 0) {
      dispatch(followUser(userID))
      dispatch(setIsUpdated(userID))
    } else {
      alert(data)
      dispatch(setIsUpdated(userID))
    }
  }).catch((error) => console.log(error))
}


export const unfollowUserThunk = (userID) => (dispatch) => {
  dispatch(setIsUpdatingNow(userID))
  api.postUnfollow(userID).then((data) => {
    if (data.resultCode == 0) {
      dispatch(unfollowUser(userID))
      dispatch(setIsUpdated(userID))
    } else {
      alert(data)
      dispatch(setIsUpdated(userID))
    }
  }).catch((error) => console.log(error))
}

export default usersReducer