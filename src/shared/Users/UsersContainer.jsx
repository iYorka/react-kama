import React from 'react';
import {connect} from "react-redux";
import {
  followUserActionCreator,
  setCurrentPageActionCreator, setIsLoadingActionCreator,
  setUsersActionCreator,
  unfollowUserActionCreator
} from "../redux/usersReducer";

import UsersAPIComponent from "./UsersAPIComponent";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalPageCount: Math.ceil(state.usersPage.totalUsersCount / state.usersPage.pageSize),
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
    isLoading: state.usersPage.isLoading,
  }
}

const mapDispatchToProps = (dispatch) => {
  const setIsLoading = (isLoading) => {
    dispatch(setIsLoadingActionCreator(isLoading))
  }
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
    dispatch(setCurrentPageActionCreator(currentPage))
  }

  return {
    onFollow,
    onUnfollow,
    setUsers,
    onPageClick,
    setIsLoading
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)

export default UsersContainer;