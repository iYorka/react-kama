import React from 'react';
import styles from "./content.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

const Content = ({store}) => {
  return (
    <div className={styles.appContent}>
      <ProfileInfo />
      <PostsContainer store={store}/>
    </div>

  );
};

export default Content;