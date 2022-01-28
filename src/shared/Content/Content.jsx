import React from 'react';
import styles from "./content.module.css"
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {changeText} from "../redux/state";

const Content = ({profileProps: {posts, newPostText}, dispatch}) => {
  return (
    <div className={styles.appContent}>
      <ProfileInfo />
      <Posts posts={posts} newPostText={ newPostText } dispatch={dispatch}/>
    </div>

  );
};

export default Content;