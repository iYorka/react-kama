import React from 'react';
import styles from "./post.module.css";
import emptyAvater from "./empty.png";

const Post = ({
                message = '',
                likeCount = 0,
                avatar = emptyAvater,

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