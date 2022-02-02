import React, {useEffect} from 'react';
import axios from "axios";
import Users from "./User/Users";
import {getUsers, postFollow, postUnfollow} from "../../api/api";


const UsersAPIComponent = ({
                             users, setCurrentPage, followUser, unfollowUser, setUsers, setIsLoading, isLoading,
                             totalPageCount = 0, currentPage = 1, pageSize
                           }) => {
    useEffect(() => {
      setIsLoading(true);
      // axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${currentPage}`)
      getUsers(currentPage, pageSize).then(data => {
        const tempUsers = []
        data.items.map(
          dataItem => {
            tempUsers.push({
              id: dataItem.id,
              followed: dataItem.followed,
              name: dataItem.name,
              avatar: dataItem.photos.small ? dataItem.photos.small : 'https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png',
              location: {city: 'Unsetted', country: 'Unsetted'},
              status: dataItem.status
            })
          })
        setUsers(tempUsers, data.totalCount)
        setIsLoading(false);
      })
    }, [currentPage])

    const onUserFollow = (userID) => {
      postFollow(userID).then((data) => {
        if (data.resultCode == 0) {
          followUser(userID)
        } else {
          alert(data)
        }
      }).catch((error) => console.log(error))
    }

    const onUserUnfollow = (userID) => {
      postUnfollow(userID).then((data) => {
        if (data.resultCode == 0) {
          unfollowUser(userID)
        } else {
          alert(data)
        }
      }).catch((error) => console.log(error))
    }

    return (
      <Users users={users}
             totalPageCount={totalPageCount}
             onPageClick={setCurrentPage}
             onFollow={onUserFollow}
             onUnfollow={onUserUnfollow}
             currentPage={currentPage}
             isLoading={isLoading}/>
    );
  }
;

export default UsersAPIComponent;