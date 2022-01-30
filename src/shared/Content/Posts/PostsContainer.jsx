import React from 'react';
import {addPostActionCreator, changeTextActionCreator} from "../../redux/profileReducer";
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
      dispatch(addPostActionCreator())
    },
    onAddPost: (text) => {
      dispatch(changeTextActionCreator(text))
    }
  }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;