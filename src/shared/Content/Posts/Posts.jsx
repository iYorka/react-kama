import React, {useState} from 'react';
import Post from "./Post/Post";
import styles from './posts.module.css'
import NewPost from "./NewPost/NewPost";
import {changeText} from "../../redux/state";

const Posts = ({posts, addPost, newPostText}) => {

  return (
    <div className={styles.container}>
      <NewPost addPost={addPost} newPostText = {newPostText} changeText={changeText}/>
      <div>
        {posts.map((post) =>
          <Post message={post.message} likeCount={post.likeCount} avatar={post.avatar}/>)
        }
      </div>
    </div>
  );
};

export default Posts;