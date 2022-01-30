import React from 'react';
import styles from "./content.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

const Content = () => {
  return (
    <div className={styles.appContent}>
      <ProfileInfo />
      <PostsContainer/>
    </div>

  );
};

export default Content;