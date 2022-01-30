import React from 'react';
import styles from "./post.module.css";
import emptyAvatar from "../../../../assets/images/empty.png";

const Post = ({
                message = '',
                likeCount = 0,
                avatar = emptyAvatar,

              }) => {
  return (
    <div className={styles.container}>
      <div className={styles.message}>
        <img className={styles.avatar} src={avatar} alt=""/>
        {message}
      </div>

      <div>
        <button className={styles.karmaButton}>+</button>
        <span> {likeCount} </span>
        <button className={styles.karmaButton}>-</button>
      </div>
    </div>
  );
};

export default Post;