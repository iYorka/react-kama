import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {followUserActionCreator, setUsersActionCreator, unfollowUserActionCreator} from "../redux/usersReducer";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
  }
}



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