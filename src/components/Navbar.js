import React, { useState } from 
'react';
import {Link} from 'react-router-dom';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { IconButton } from '@material-ui/core';

const Navbar = ({ changeLevel, level, handleChange }) => {
  const [type, changeType] = useState('hex');
  const [snackbarOpen, toggleSnackbar] = useState(false);

  const handleSelectChange = e => {
    changeType(e.target.value);
    handleChange(e.target.value);
    toggleSnackbar(true);
  };

  return (
    <nav className='Navbar'>
      <div className='logo'>
        <Link to='/'>Color Picker</Link>
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
      <div className='select-container'>
        <Select value={type} onChange={handleSelectChange}>
          <MenuItem value='hex'>hex - #ffffff</MenuItem>
          <MenuItem value='rgb'>rgb - rgb(255,255,255)</MenuItem>

          <MenuItem value='rgba'>rgba - rgba(255,255,255,1.0)</MenuItem>
        </Select>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={snackbarOpen}
        autoHideDuration={3000}
        message={<span id='message-id'>{`Format Changed to ${type}`}</span>}
        ContentProps={{
          'aria-describedby': 'message-id'
        }}
        onClose={() => toggleSnackbar(false)}
        action={[
          <IconButton
            onClick={() => toggleSnackbar(false)}
            color='inherit'
            key='close'
            aria-label='close'
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    </nav>
  );
};

export default Navbar;
