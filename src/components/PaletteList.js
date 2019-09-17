import React from 'react';
import MiniPalette from './MiniPalette';

import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    background: 'blue',
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  container: {
    width: '50%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  nav: {

  },
  palettes: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3,30%)',
    gridGap: '5%'
  }
};

const PaletteList = ({ palettes, classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.palettes}>
          {palettes.map(palette => (
            <MiniPalette {...palette} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(PaletteList);
