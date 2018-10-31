import React from 'react';

/* Allias styles set in webpack */
import 'styles/common.scss';

/* Allias images set in webpack */
import jpg from 'images/jpg.jpg';
import png from 'images/png.png';

const ComponentOne = () => {

  return (
    <div>
     <h2>Example of import png source</h2>
     <img src={png} />
     <h2>Example of import jpg source</h2>
     <img src={jpg} />
    </div>
  )
};

export default ComponentOne;

