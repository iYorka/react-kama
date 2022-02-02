import React from 'react';
import {addPost, changeText} from "../../redux/profileReducer";
import Posts from "./Posts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPostChange: () => {
      dispatch(addPost())
    },
    onAddPost: (text) => {
      dispatch(changeText(text))
    }
  }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;