import React, { useState, useRef } from 'react';

import ColorBox from './ColorBox';

import Navbar from './Navbar';
import './Palette.css';

const Palette = props => {
  const [level, updateLevel] = useState(500);

  const changeLevel = newLevel => {
    updateLevel(newLevel);
  };

  const colorBoxes = props.palette.colors[level].map(color => (
    <ColorBox background={color.hex} name={color.name} />
  ));
  return (
    <div className='Palette'>
      <Navbar level={level} changeLevel={changeLevel} />
      <div className='Palette-colors'>{colorBoxes}</div>
    </div>
  );
};

export default Palette;
