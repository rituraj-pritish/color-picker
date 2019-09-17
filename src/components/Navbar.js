import React from 'react';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Navbar = ({ changeLevel, level }) => {
  return (
    <nav className='Navbar'>
      <div className='logo'>
        <a href='#'>Color Picker</a>
      </div>
      <div className='slider-container'>
        <span className='level'>{level}</span>
        <div className='slider'>
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            onAfterChange={changeLevel}
            step={100}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
