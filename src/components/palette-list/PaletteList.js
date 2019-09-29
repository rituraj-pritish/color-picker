import React, { useState } from 'react';
import MiniPalette from '../mini-palette/MiniPalette';
import { Link, withRouter } from 'react-router-dom';
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
import styles from './PaletteList.styles';

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
            <Link className={classes.createBtn} to='/palette/new'>
              Create Palette
            </Link>
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

export default withRouter(withStyles(styles)(PaletteList));
