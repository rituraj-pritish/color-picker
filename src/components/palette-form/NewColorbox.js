import React from 'react';
import {SortableElement} from 'react-sortable-hoc'

import { makeStyles } from '@material-ui/styles';
import { Delete } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    width: '20%',
    height: '25%',
    margin: '-4px auto',
    display: 'inline-block',
    overflow: 'hidden',
    '&:hover svg': {
      color: '#fff',
      transform: 'scale(1.3)'
    }
  },
  boxContent: {
    position: 'absolute',
    bottom: 0,
    padding: '3px 7px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between'
  },
  delete: {
    cursor: 'pointer',
    '& svg': {
      transition: 'all 0.3s ease-in-out'
    }
  }
});

const NewColorbox = props => {
  const classes = useStyles();
  return (
    <div
      className={classes.root}
      style={{ backgroundColor: props.color.color }}
    >
      <div className={classes.boxContent}>
        <span>{props.color.name}</span>
        <span className={classes.delete}>
          <Delete onClick={() => props.deleteColor(props.color.name)} />
        </span>
      </div>
    </div>
  );
};

export default SortableElement(NewColorbox);
