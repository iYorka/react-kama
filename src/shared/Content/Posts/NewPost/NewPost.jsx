import React from 'react';
import styles from "./newpost.module.css";
import {
  addPostActionCreator,
  changeTextActionCreator
} from "../../../redux/profileReducer";

const NewPost = ({dispatch, newPostText}) => {
  const onAddPost = () => {
    dispatch(
      addPostActionCreator()
    )
  }

  const onChangeText = (e) => {
    dispatch(changeTextActionCreator(e.target.value))
  }

  return (
    <div className={styles.container}>
      <div>
        <textarea onChange={onChangeText} value={newPostText} className={styles.input}/>
      </div>
      <div>
        <button onClick={onAddPost} className={styles.button}>
          add post
        </button>
      </div>
    </div>
  );
};

export default NewPost;