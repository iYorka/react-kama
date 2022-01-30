import React from 'react';
import Post from "./Post/Post";
import styles from './posts.module.css'
import NewPost from "./NewPost/NewPost";

const Posts = ({posts, newPostText, onPostChange, onAddPost}) => {
  return (
    <div className={styles.container}>
      <NewPost newPostText={newPostText} onPostChange={onPostChange} onAddPost={onAddPost}/>
      <div>
        {posts.map((post) =>
          (<Post message={post.message} likeCount={post.likeCount} avatar={post.avatar} key = {Math.random()}/>)
        )
        }
      </div>
    </div>
  );
};

export default Posts;