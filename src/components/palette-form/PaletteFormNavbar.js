import React from 'react';

import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import { Button } from '@material-ui/core';
import PaletteMetaForm from './PaletteMetaForm';
import styles from './PaletteFormNavbar.styles';

const PaletteFormNavbar = props => {
  const { classes, open, handleDrawerOpen, handleSave, palettes } = props;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position='fixed'
        color='default'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            {!open && <ChevronRightIcon />}
          </IconButton>
          <Typography variant='h6' noWrap>
            Palette Creator
          </Typography>
        </Toolbar>
        <div className={classes.rightContent}>
          <Link to='/'>
            <Button
              className={classes.back}
              variant='contained'
              color='secondary'
            >
              Back
            </Button>
          </Link>
          <PaletteMetaForm handleSave={handleSave} palettes={palettes} />
        </div>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(PaletteFormNavbar);
