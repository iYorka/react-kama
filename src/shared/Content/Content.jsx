import React from 'react';
import styles from "./content.module.css"

const Content = () => {
  return (
    <div className={styles.appContent}>
      <div>
        <img style={{maxWidth: "100%"}} src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="main profile pic"/>
      </div>
      <div>
        avatar and profile
      </div>
      <div>
        posts
        <div>
          new post
        </div>
        <div>
          all posts
        </div>
      </div>
    </div>

  );
};

export default Content;