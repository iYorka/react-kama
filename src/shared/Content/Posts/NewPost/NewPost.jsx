import React from 'react';
import styles from "./newpost.module.css";

const NewPost = ({addPost, changeText, newPostText}) => {
  const newPostRef = React.createRef();

  const onAddPost = () => {
    addPost(newPostRef.current.value);
  }

  const onChangeText = () => {
    changeText(newPostRef.current.value);
  }

  return (
    <div className={styles.container}>
      <div>
        <textarea onChange={onChangeText}  value={newPostText} ref={newPostRef} className={styles.input} />
      </div>
      <div>
        <button onClick={ onAddPost } className = {styles.button} >
          add post
        </button>
      </div>
    </div>
  );
};

export default NewPost;