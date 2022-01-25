import React from 'react';
import styles from "./content.module.css"
import Posts from "./Posts/Posts";

const Content = () => {
  return (
    <div className={styles.appContent}>
      <div>
        <img className={styles.img} src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="main profile pic"/>
      </div>
      <div>
        avatar and profile
      </div>
      <Posts/>
    </div>

  );
};

export default Content;