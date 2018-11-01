import React from 'react';
import ReactSVG from 'react-svg';

/* Allias styles set in webpack */
import 'styles/common.scss';

/* Allias images set in webpack */
import jpg from 'images/jpg.jpg';
import png from 'images/png.png';
import Svg from "images/svg.svg";


const ComponentOne = () => {

  return (
    <div>
      <h2>Example of import png source</h2>
      <img src={png} />
      <h2>Example of import jpg source</h2>
      <img src={jpg} />
      <h2>Example of usage svg as component</h2>
      <ReactSVG src={Svg} className="svgFill" />
      <h2>Example of usage svg as img source</h2>
      <img src={Svg} />
      <h2>Example of usage svg as background image</h2>
      <div className="icon-svg" />
    </div>
  )
};

export default ComponentOne;

