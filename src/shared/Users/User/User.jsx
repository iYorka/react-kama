import React from 'react';
import styles from './user.module.css'
import emptyAvatar from '../../../assets/images/empty.png'

const User = ({user, onClick}) => {
  const onFollowClick = (e) => {
    onClick(user.id)
  }
  return (
    <div className={styles.container}>
      <div className={styles.itemInfo}>
        <img className={styles.avatar} src={user.avatar ? user.avatar : emptyAvatar} alt="user avatar image"/>
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
      <button onClick={onFollowClick} className={styles.button}> {!user.followed ? 'follow' : 'unfollow'}</button>

    </div>
  );
};

export default User;