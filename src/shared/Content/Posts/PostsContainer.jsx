import React from 'react';
import {addPostActionCreator, changeTextActionCreator} from "../../redux/profileReducer";
import Posts from "./Posts";

const PostsContainer = ({store}) => {
  const onPostChange = () => {
    dispatch(
      addPostActionCreator()
    )
  }

  const onAddPost = (text) => {
    dispatch(changeTextActionCreator(text))
  }
  const dispatch = store.dispatch;
  const newPostText = store.getState().profilePage.newPostText;
  const posts = store.getState().profilePage.posts;
  return (
    <Posts newPostText={newPostText} posts={posts} onAddPost={onAddPost} onPostChange={onPostChange}/>
  );
};

export default PostsContainer;