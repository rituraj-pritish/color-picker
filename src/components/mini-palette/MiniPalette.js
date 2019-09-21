import React from 'react';

import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/styles';
import styles from './MiniPalette.styles';

const MiniPalette = props => {

  const {
    classes,
    paletteName,
    id,
    emoji,
    colors,
    goToPalette,
    openDialog
  } = props;

  const miniColorBoxes = colors.map(color => (
    <div
      className={classes.miniColor}
      key={color.name}
      style={{ backgroundColor: color.color }}
    />
  ));

  const handleDelete = e => {
    e.stopPropagation();
    openDialog(id);
  };

  return (
    <div className={classes.root} onClick={() => goToPalette(id)}>
      <div onClick={handleDelete} className={classes.delete}>
        <DeleteIcon />
      </div>
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName}
        <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
};

export default withStyles(styles)(MiniPalette);
