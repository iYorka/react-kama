import React from 'react';
import {connect} from "react-redux";
import {
  followUser,
  setCurrentPage, setIsLoading,
  setUsers,
  unfollowUser
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

const UsersContainer = connect(mapStateToProps, {
  followUser,
  setCurrentPage,
  setIsLoading,
  setUsers,
  unfollowUser
})(UsersAPIComponent)

export default UsersContainer;