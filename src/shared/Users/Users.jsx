import React, {useEffect} from 'react';
import styles from './users.module.css';
import User from "./User/User";
import axios from "axios";

const Users = ({users, onFollow, onUnfollow, setUsers}) => {
  const tempUsers = [
    {
      id: 1,
      followed: true,
      name: 'Bro',
      avatar: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png',
      location: {city: 'Msk', country: 'Russia'},
      status: 'Bla bla bla'
    },
    {
      id: 2,
      followed: true,
      name: 'Second bro',
      avatar: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png',
      location: {city: 'Minsk', country: 'Belarus'},
      status: 'Bla bla bla'
    },
    {
      id: 3,
      followed: false,
      name: 'My ex',
      avatar: undefined,
      location: {city: '8-th circle', country: 'Hell'},
      status: 'Bla bla bla'
    },
    {
      id: 4,
      followed: true,
      name: 'Mom',
      avatar: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png',
      location: {city: 'Molo', country: 'Belarus'},
      status: 'Bla bla bla'
    },
    {
      id: 5,
      followed: true,
      name: 'Dad',
      avatar: undefined,
      location: {city: 'Molo', country: 'Belarus'},
      status: 'Bla bla bla'
    },
  ]

  useEffect(() => {
      const userList = axios.get("https://social-network.samuraijs.com/api/1.0/users",
        {count: 20, page: 1}
      )
        .then(data => {
          data.data.items.map(
            dataItem => {
              tempUsers.push({
                id: dataItem.id,
                followed: dataItem.followed,
                name: dataItem.name,
                avatar: dataItem.photos.small ? dataItem.photos.small : dataItem.photos.large,
                location: {city: 'Unsetted', country: 'Unsetted'},
                status: dataItem.status
              })

            })
          setUsers(tempUsers)
        })
  }, [])
  return (
    <div className={styles.container}>
      {users.map(user => {
        return (
          <div key={user.id} className={styles.item}>
            <User user={user} onClick={user.followed ? onUnfollow : onFollow}/>
          </div>)
      })}
    </div>
  );
};

export default Users;