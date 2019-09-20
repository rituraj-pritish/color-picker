import React from 'react';
import MiniPalette from './MiniPalette';
import { Link, withRouter } from 'react-router-dom';
import sizes from './sizes';

import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: 'blue',
    height: '100vh'
  },
  container: {
    width: '50%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
    [sizes.down('xs')]: {
      width: '70%'
    }
  },
  header: {
    margin: '10px 0',
    width: '100%',
    display: 'flex',
    [sizes.down('xs')]: {
      height: '3rem',
      alignItems: 'center'
    }
  },
  palettes: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3,30%)',
    gridGap: '5%',
    [sizes.down('xs')]: {
      gridGap: '2%',
      gridTemplateColumns: '1fr'
    }
  },
  link: {
    marginLeft: 'auto',
    '& a': {
      textDecoration: 'none',
      color: '#fff'
    }
  }
};

const PaletteList = props => {
  const { palettes, classes, deletePalette } = props;

  const goToPalette = id => {
    props.history.push(`/palette/${id}`);
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.header}>
          <span>Color Picker</span>
          <span className={classes.link}>
            <Link to='/palette/new'>Create Palette</Link>
          </span>
        </div>
        <div className={classes.palettes}>
          {palettes.map(palette => (
            <MiniPalette
              key={palette.id}
              deletePalette={deletePalette}
              {...palette}
              goToPalette={() => goToPalette(palette.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default withRouter(withStyles(styles)(PaletteList));
