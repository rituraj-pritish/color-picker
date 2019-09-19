import React, { useEffect } from 'react';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '@material-ui/core';
import PaletteMetaForm from './PaletteMetaForm';

const drawerWidth = 330;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    flexDirection: 'row',
    justifyContent: 'space-between',
    '& a': {
      textDecoration: 'none'
    }
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  rightContent: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '24px',
    width: '240px',
    minWidth: '240px',

    justifyContent: 'space-between'
  }
}));

const PaletteFormNavbar = props => {
  const classes = useStyles();
  const {
    open,
    handleDrawerOpen,
    handleSave,
    palettes
  } = props;

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
            <MenuIcon />
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
          <PaletteMetaForm
            handleSave={handleSave}
            palettes={palettes}
          />
        </div>
      </AppBar>
    </div>
  );
};

export default PaletteFormNavbar;
