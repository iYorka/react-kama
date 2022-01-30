import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {followUserActionCreator, setUsersActionCreator, unfollowUserActionCreator} from "../redux/usersReducer";
import axios from "axios";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
  }
}
const tempUsers = []
const userList = axios.get("https://social-network.samuraijs.com/api/1.0/users",
  {count: 20, page: 1}
)
  .then(data => data.data.items.map(dataItem => tempUsers.push({
    id: dataItem.id,
    followed: dataItem.followed,
    name: dataItem.name,
    avatar: dataItem.photos.small ? dataItem.photos.small : dataItem.photos.large,
    location: {city: 'Unsetted', country: 'Unsetted'},
    status: dataItem.status
  })))


const mapDispatchToProps = (dispatch) => {
  const onFollow = (user_id) => {
    dispatch(followUserActionCreator(user_id))
  }
  const onUnfollow = (user_id) => {
    dispatch(unfollowUserActionCreator(user_id))
  }
  const setUsers = (users) => {
    dispatch(setUsersActionCreator(users))
  }

  return {
    onFollow,
    onUnfollow,
    setUsers
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;