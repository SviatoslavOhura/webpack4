import React from 'react';

/* Allias styles set in webpack */
import 'styles/common.scss';

/* Allias images set in webpack */
import jpg from 'images/jpg.jpg';
import png from 'images/png.png';
import Svg from "../assets/svg/svg.svg";

const ComponentOne = () => {

  return (
    <div>
     <h2>Example of import png source</h2>
     <img src={png} />
     <h2>Example of import jpg source</h2>
     <img src={jpg} />
     <h2>Example of import svg source</h2>
      <Svg className="svgFill" />
    </div>
  )
};

export default ComponentOne;

