import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { IconButton } from '@material-ui/core';
import styles from './Navbar.styles';

const Navbar = ({ changeLevel, level, handleChange, classes, history }) => {
  const [type, changeType] = useState('hex');
  const [snackbarOpen, toggleSnackbar] = useState(false);

  const handleSelectChange = e => {
    changeType(e.target.value);
    handleChange(e.target.value);
    toggleSnackbar(true);
  };

  return (
    <nav className={classes.root}>
      <div className={classes.logo}>
        <Link to='/'>Color Picker</Link>
      </div>
      <div>
        <span className='level'>{level}</span>

        <div className={classes.slider}>
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            onAfterChange={changeLevel}
            step={100}
          />
        </div>
      </div>
      <div className={classes.selectContainer}>
        <span className={classes.back} onClick={() => history.push('/')}>
          BACK
        </span>
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

export default withRouter(withStyles(styles)(Navbar));
