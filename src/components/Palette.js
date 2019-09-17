import React, { useState, useRef } from 'react';

import ColorBox from './ColorBox';

import Navbar from './Navbar';
import './Palette.css';

const Palette = props => {
  const {colors,paletteName,emoji} = props.palette

  const [level, updateLevel] = useState(500);
  const [type, updateType] = useState('hex');

  const changeLevel = newLevel => {
    updateLevel(newLevel);
  };

  const handleChange = val => {
    updateType(val);
  };

  const colorBoxes = colors[level].map(color => (
    <ColorBox background={color[type]} name={color.name} key={color.id} />
  ));
  return (
    <div className='Palette'>
      <Navbar
        level={level}
        changeLevel={changeLevel}
        handleChange={handleChange}
      />
      <div className='Palette-colors'>{colorBoxes}</div>
      <footer className='Palette-footer'>
        {paletteName}
        <span className='emoji '>{emoji}</span>
      </footer>
    </div>
  );
};

export default Palette;
