import React from 'react';
import styles from './user.module.css'
import emptyAvatar from '../../../assets/images/empty.png'
import {NavLink} from "react-router-dom";

const User = ({isUpdatingNow, user, onClick}) => {
  const onFollowClick = (e) => {
    onClick(user.id)
  }
  return (
    <div className={styles.container}>
      <div className={styles.itemInfo}>
        <NavLink to={'/profile/' + user.id}>
          <img className={styles.avatar} src={user.avatar ? user.avatar : emptyAvatar} alt="user avatar image"/>
        </NavLink>
        <div>
          <div>
            name: {user.name}
          </div>
          <div>
            location: {user.location.country}, {user.location.city}
          </div>
          <div>
            <p>status: {user.status}</p>
          </div>
        </div>
      </div>
      <button disabled={isUpdatingNow.some((u) => u === user.id) ? true : false } onClick={onFollowClick} className={styles.button}> {!user.followed ? 'follow' : 'unfollow'}</button>

    </div>
  );
};

export default User;