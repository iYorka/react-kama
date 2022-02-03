import React from 'react';
import styles from "../users.module.css";
import User from "./User";
import Preloader from "../../common/Preloader/Preloader";

const Users = ({users, totalPageCount, currentPage, onUnfollow, onFollow, onPageClick, isLoading, isUpdatingNow}) => {
  const pagesArray = [];
  for (let i = 1; i < totalPageCount && i <= 20; i++) {
    pagesArray.push(i);
  }
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        {pagesArray.map(p => {
          return (
            <button key={ p} className={`${styles.button} ${currentPage === p ? styles.activeButton : ''}`}
                    onClick={() => onPageClick(p)}> {p} </button>
          )
        })}
      </div>
      {isLoading ? <Preloader /> : users.map(user => {
        return (
            <div key={user.id} className={styles.item}>
              <User isUpdatingNow = {isUpdatingNow} user={user} onClick={user.followed ? () => onUnfollow(user.id) : () => onFollow(user.id)}/>
            </div>
        )
      })}
    </div>
  );
};

export default Users;