import React, { useState } from 'react';
import {connect} from 'react-redux';

import MiniPalette from './MiniPalette';
import { Link, withRouter } from 'react-router-dom';
import sizes from './sizes';
import background from '../background.svg';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import Avatar from '@material-ui/core/Avatar';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { withStyles } from '@material-ui/styles';
import { ListItemText, ListItemAvatar } from '@material-ui/core';
import {deletePalette} from '../actions'

const styles = {
  '@global': {
    '.fade-exit': {
      opacity: 1
    },
    '.fade-exit-active': {
      opacity: 0,
      transition: 'opacity 500ms ease-out'
    }
  },
  root: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: '100vh',
    overflow: 'scroll',
    overflowX: 'hidden',
    /* background by SVGBackgrounds.com */
    backgroundColor: '#667DFF',
    backgroundImage: `url(${background})`
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
    [sizes.down('md')]: {
      gridGap: '2%',
      gridTemplateColumns: '1fr 1fr'
    },
    // [sizes.down('sm')]: {
    //   gridGap: '2%',
    //   gridTemplateColumns: '1fr 1fr'
    // },
    [sizes.down('mb')]: {
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
  
  const [box, setBox] = useState(false);
  const [deletingId, setDeletingId] = useState('');

  const { palettes, classes, deletePalette } = props;

  const goToPalette = id => {
    props.history.push(`/palette/${id}`);
  };

  const openDialog = id => {
    setBox(true);
    setDeletingId(id);
  };

  const closeDialog = () => {
    setBox(false);
    setDeletingId('');
  };

  const handleDelete = () => {
    deletePalette(deletingId);
    closeDialog();
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
        <TransitionGroup className={classes.palettes}>
          {palettes.map(palette => (
            <CSSTransition key={palette.id} classNames='fade' timeout={500}>
              <MiniPalette
                key={palette.id}
                openDialog={openDialog}
                {...palette}
                goToPalette={goToPalette}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
      <Dialog open={box} onClose={closeDialog}>
        <DialogTitle>Delete This Palette</DialogTitle>
        <List>
          <ListItem button onClick={handleDelete}>
            <ListItemAvatar>
              <Avatar style={{ backgroundColor: '#9eb2de', color: '#507fe6' }}>
                <CheckIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>Delete</ListItemText>
          </ListItem>
          <ListItem button onClick={closeDialog}>
            <ListItemAvatar>
              <Avatar style={{ backgroundColor: '#eb837a', color: '#cc473b' }}>
                <CloseIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>Cancel</ListItemText>
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
};

const mapStateToProps = state => ({
  palettes: state.palettes.palettes
})

export default connect(mapStateToProps,{deletePalette})(withRouter(withStyles(styles)(PaletteList)));
