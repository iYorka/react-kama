import React, {useEffect} from 'react';
import axios from "axios";
import Users from "./User/Users";


const UsersAPIComponent = ({users, setCurrentPage, followUser, unfollowUser, setUsers, setIsLoading, isLoading,
                             totalPageCount = 0, currentPage = 1, pageSize}) => {
    useEffect(() => {
      setIsLoading(true);
      const userList = axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${currentPage}`)
        .then(data => {
          const tempUsers = []
          data.data.items.map(
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
          setUsers(tempUsers, data.data.totalCount)
          setIsLoading(false);
        })
    }, [currentPage])

    return (
      <Users users={users}
             totalPageCount={totalPageCount}
             onPageClick={setCurrentPage}
             onFollow={followUser}
             onUnfollow={unfollowUser}
             currentPage={currentPage}
             isLoading={isLoading}/>
    );
  }
;

export default UsersAPIComponent;