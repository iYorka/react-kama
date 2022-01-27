import React, {useState} from 'react';
import Post from "./Post/Post";
import styles from './posts.module.css'
import NewPost from "./NewPost/NewPost";

const Posts = ({posts}) => {
  console.log(posts)
  return (
    <div className={styles.container}>
      <NewPost />
      <div>
        {posts.map((post) =>
          <Post message={post.message} likeCount={post.likeCount} avatar={post.avatar}/>)
        }
      </div>
    </div>
  );
};

export default Posts;