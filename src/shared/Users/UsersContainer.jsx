import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
  followUserActionCreator,
  setCurrentPageActionCreator,
  setUsersActionCreator,
  unfollowUserActionCreator
} from "../redux/usersReducer";
import axios from "axios";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalPageCount: Math.ceil(state.usersPage.totalUsersCount / state.usersPage.pageSize),
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize
  }
}

const mapDispatchToProps = (dispatch) => {
  const onFollow = (user_id) => {
    dispatch(followUserActionCreator(user_id))
  }
  const onUnfollow = (user_id) => {
    dispatch(unfollowUserActionCreator(user_id))
  }
  const setUsers = (users, totalUsersCount) => {
    dispatch(setUsersActionCreator(users, totalUsersCount))
  }

  const onPageClick = (currentPage) => {
    debugger
    dispatch(setCurrentPageActionCreator(currentPage))
  }

  return {
    onFollow,
    onUnfollow,
    setUsers,
    onPageClick
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;