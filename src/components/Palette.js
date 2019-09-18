import React, { useState } from 'react';
import { withStyles } from '@material-ui/styles';

import ColorBox from './color-box/ColorBox';
import Navbar from './navbar/Navbar';

const styles = {
  root: {
    height: '100vh',
    overflow: 'hidden'
  },
  paletteColors: {
    height: '90%'
  },
  footer: {
    background: 'white',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    fontWeight: 'bold'
  },
  emoji: {
    fontSize: '1.2rem',
    margin: '0 4px'
  }
};

const Palette = props => {
  const { colors, paletteName, emoji } = props.palette;
  const { classes } = props;

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
    <div className={classes.root}>
      <Navbar
        level={level}
        changeLevel={changeLevel}
        handleChange={handleChange}
      />
      <div className={classes.paletteColors}>{colorBoxes}</div>
      <footer className={classes.footer}>
        {paletteName}
        <span className={classes.emoji}>{emoji}</span>
      </footer>
    </div>
  );
};

export default withStyles(styles)(Palette);
