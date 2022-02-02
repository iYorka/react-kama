import React from 'react';
import loadingImg from "../../../assets/images/loading.svg";

const Preloader = () => {
  return (
    <div style={{textAlign: 'center'}}>
      <img src={loadingImg} alt=""/>
    </div>
  );
};

export default Preloader;