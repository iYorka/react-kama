import React from 'react';
import styles from "./profileInfo.module.css";
import Profile from "./Profile/Profile";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className={styles.img}
             src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
             alt="main profile pic"/>
      </div>
      <div>
        <Profile/>
      </div>
    </div>
  )
    ;
};

export default ProfileInfo;