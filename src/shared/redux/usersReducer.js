const ADD_USER = 'ADD_USER';
const SEARCH_USER = 'SEARCH_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const FOLLOW_USER = 'FOLLOW_USER';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

const initialState = {
  users: [],
  currentPage: 1,
  totalUsersCount: 0,
  pageSize: 15
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
    case
    ADD_USER:

      return {
        ...state,
      };
    case
    SEARCH_USER:

    default
    :
      return state
  }
}

export const addUserActionCreator = () => ({
  type: ADD_USER
})

export const followUserActionCreator = (id) => ({
  type: FOLLOW_USER,
  user_id: id
})

export const unfollowUserActionCreator = (id) => ({
  type: UNFOLLOW_USER,
  user_id: id
})

export const setUsersActionCreator = (users, totalUsersCount) => ({
  type: SET_USERS,
  users: users,
  totalUsersCount: totalUsersCount
})

export const setCurrentPageActionCreator = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage: currentPage
})

export const searchUserActionCreator = (name = '', id = 0) => ({
  type: SEARCH_USER,
  name: name,
  id: id
})


export default usersReducer