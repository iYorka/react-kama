import React from 'react';
import styles from "../users.module.css";
import User from "./User";
import loadingImg from '../../../assets/images/loading.svg'

const Users = ({users, totalPageCount, currentPage, onUnfollow, onFollow, onPageClick, isLoading}) => {
  const pagesArray = [];
  for (let i = 1; i < totalPageCount && i <= 20; i++) {
    pagesArray.push(i);
  }
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        {pagesArray.map(p => {
          return (
            <button className={`${styles.button} ${currentPage === p ? styles.activeButton : ''}`}
                    onClick={() => onPageClick(p)}> {p} </button>
          )
        })}
      </div>
      {isLoading ? <img src={loadingImg} alt=""/> : users.map(user => {
        return (
            <div key={user.id} className={styles.item}>
              <User user={user} onClick={user.followed ? onUnfollow : onFollow}/>
            </div>
        )
      })}
    </div>
  );
};

export default Users;