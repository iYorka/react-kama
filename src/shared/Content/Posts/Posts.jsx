import React, {useState} from 'react';
import Post from "./Post/Post";
import styles from './posts.module.css'

const Posts = () => {
  const postsTempContent = [
    {message: 'Hi, bro, its first post', likeCount: 33, avatar: undefined},
    {message: 'Hi, bro, its second post', likeCount: 1488, avatar: undefined},
    {message: 'Hi, bro, its third post', likeCount: -3, avatar: "https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png"}];
  return (
    <div className={styles.container}>
      <div>
        {postsTempContent.map((post) =>
          <Post message={post.message} likeCount={post.likeCount} avatar={post.avatar}/>)
        }
      </div>
    </div>
  );
};

export default Posts;