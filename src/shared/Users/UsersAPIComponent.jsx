import React, {useEffect} from 'react';
import Users from "./User/Users";

const UsersAPIComponent = ({
                             users, setCurrentPage, isLoading,
                             totalPageCount = 0, currentPage = 1, pageSize,
                             isUpdatingNow, getUsers, followUserThunk, unfollowUserThunk
                           }) => {
    useEffect(() => {
      getUsers(currentPage, pageSize)
    }, [currentPage])

    const onUserFollow = (userID) => {
      followUserThunk(userID)
    }

    const onUserUnfollow = (userID) => {
      unfollowUserThunk(userID)
    }

    return (
      <Users users={users}
             totalPageCount={totalPageCount}
             onPageClick={setCurrentPage}
             onFollow={onUserFollow}
             onUnfollow={onUserUnfollow}
             currentPage={currentPage}
             isLoading={isLoading}
             isUpdatingNow={isUpdatingNow}
      />

    );
  }
;

export default UsersAPIComponent;