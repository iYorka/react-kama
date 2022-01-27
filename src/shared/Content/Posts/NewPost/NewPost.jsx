import React from 'react';
import styles from "./newpost.module.css"

const NewPost = () => {
  return (
    <div className={styles.container}>
      <div>
        <textarea className={styles.input}></textarea>
      </div>
      <div>
        <button>
          add post
        </button>
      </div>
    </div>
  );
};

export default NewPost;