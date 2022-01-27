import React from 'react';
import styles from "./content.module.css"
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Content = ({posts}) => {
  return (
    <div className={styles.appContent}>
      <ProfileInfo />
      <Posts posts={posts}/>
    </div>

  );
};

export default Content;