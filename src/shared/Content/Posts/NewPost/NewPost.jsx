import React from 'react';
import styles from "./newpost.module.css";

const NewPost = ({onAddPost, onPostChange, newPostText}) => {
  const addPost = () => {
    onPostChange()
  }

  const changeText = (e) => {
    onAddPost(e.target.value)
  }

  return (
    <div className={styles.container}>
      <div>
        <textarea onChange={changeText} value={newPostText} className={styles.input}/>
      </div>
      <div>
        <button onClick={addPost} className={styles.button}>
          add post
        </button>
      </div>
    </div>
  );
};

export default NewPost;