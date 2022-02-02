import React from 'react';
import styles from "./profile.module.css"

const Profile = ({profile}) => {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={profile.avatar} alt=""/>
      <div className={styles.info}>
        <p>name: {profile.name}</p>
        <p>birth: {profile.age}</p>
        <p>status: {profile.status}</p>
        <p>info: {profile.info}</p>
      </div>
    </div>
  );
};

export default Profile;