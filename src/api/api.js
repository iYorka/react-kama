import axios from "axios";

const connection = axios.create(
  {
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': 'b4731106-7462-4b35-bb30-278be0eca7d9'}
  }
)

export const getUsers = (currentPage = 1, pageSize = 20) => {
  return connection.get(`users?count=${pageSize}&page=${currentPage}`).then((response) => {return response.data})
}

export const postFollow = (userID) => {
  return connection.post(`/follow/${userID}`).then((response) => {return response.data})
}

export const postUnfollow = (userID) => {
  return connection.delete(`/follow/${userID}`).then((response) => {return response.data})
}

export const authMe = () => {
  return connection.get(`auth/me`).then((response) => {return response.data})
}

export const getUserProfile = (userID) => {
  return connection.get(`/profile/${userID}`).then((response) => {return response.data})
}