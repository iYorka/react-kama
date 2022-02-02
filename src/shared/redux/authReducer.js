const SET_LOGIN_DATA = 'SET_LOGIN_DATA'

const initialState = {
  id: null,
  login: null,
  email: null,
  avatar: null,
  isLogined: false
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_DATA:
      return ({
        ...state,
        ...action.data
      })

    default:
      return state
  }
}

export const setLoginData = ({login, email, userId, isLogined}) => {
  return ({
    type: SET_LOGIN_DATA,
    data: {
      login,
      email,
      userId,
      isLogined
    }
  })
}