const ADD_USER = 'ADD-USER';
const SEARCH_USER = 'SEARCH_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const FOLLOW_USER = 'FOLLOW_USER';
const SET_USERS = 'SET_USERS';

const defaultUsers = [];

const initialState = {
  users: defaultUsers,
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
      return {...state, users: [...state.users, ...action.users]}
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

export const setUsersActionCreator = (users) => ({
  type: SET_USERS,
  users: users
})

export const searchUserActionCreator = (name = '', id = 0) => ({
  type: SEARCH_USER,
  name: name,
  id: id
})


export default usersReducer