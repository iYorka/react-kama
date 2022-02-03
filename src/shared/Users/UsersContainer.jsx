import React from 'react';
import {connect} from "react-redux";
import {
  followUser, followUserThunk, getUsers,
  setCurrentPage, setIsLoading, setIsUpdated, setIsUpdatingNow,
  setUsers,
  unfollowUser, unfollowUserThunk
} from "../redux/usersReducer";

import UsersAPIComponent from "./UsersAPIComponent";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalPageCount: Math.ceil(state.usersPage.totalUsersCount / state.usersPage.pageSize),
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
    isLoading: state.usersPage.isLoading,
    isUpdatingNow: state.usersPage.isUpdatingNow
  }
}

const UsersContainer = connect(mapStateToProps, {
  followUser,
  setCurrentPage,
  setIsLoading,
  setUsers,
  unfollowUser,
  setIsUpdatingNow,
  setIsUpdated,
  getUsers,
  followUserThunk,
  unfollowUserThunk
})(UsersAPIComponent)

export default UsersContainer;