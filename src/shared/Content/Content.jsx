import React from 'react';
import styles from "./content.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

const Content = ({profile, isLoading}) => {

  return (
    <div className={styles.appContent}>
        <ProfileInfo profile={profile} isLoading={isLoading}/>
        <PostsContainer/>
    </div>

  );
};

export default Content;