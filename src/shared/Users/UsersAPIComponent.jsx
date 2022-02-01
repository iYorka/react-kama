import React, {useEffect} from 'react';
import styles from './users.module.css';
import User from "./User/User";
import axios from "axios";
import Users from "./User/Users";

const UsersAPIComponent = ({users, onPageClick, onFollow, onUnfollow, setUsers, setIsLoading, isLoading,
                             totalPageCount = 0, currentPage = 1, pageSize}) => {
    useEffect(() => {
      setIsLoading(true);
      const userList = axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${currentPage}`)
        .then(data => {
          const tempUsers = [
            // {
            //   id: 1,
            //   followed: true,
            //   name: 'Bro',
            //   avatar: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png',
            //   location: {city: 'Msk', country: 'Russia'},
            //   status: 'Bla bla bla'
            // },
            // {
            //   id: 2,
            //   followed: true,
            //   name: 'Second bro',
            //   avatar: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png',
            //   location: {city: 'Minsk', country: 'Belarus'},
            //   status: 'Bla bla bla'
            // },
            // {
            //   id: 3,
            //   followed: false,
            //   name: 'My ex',
            //   avatar: undefined,
            //   location: {city: '8-th circle', country: 'Hell'},
            //   status: 'Bla bla bla'
            // },
            // {
            //   id: 4,
            //   followed: true,
            //   name: 'Mom',
            //   avatar: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png',
            //   location: {city: 'Molo', country: 'Belarus'},
            //   status: 'Bla bla bla'
            // },
            // {
            //   id: 5,
            //   followed: true,
            //   name: 'Dad',
            //   avatar: undefined,
            //   location: {city: 'Molo', country: 'Belarus'},
            //   status: 'Bla bla bla'
            // },
          ]
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
             onPageClick={onPageClick}
             onFollow={onFollow}
             onUnfollow={onUnfollow}
             currentPage={currentPage}
             isLoading={isLoading}/>
    );
  }
;

export default UsersAPIComponent;