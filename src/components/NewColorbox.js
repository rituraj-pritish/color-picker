import React from 'react'

import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles({
  root: {
    width: '20%',
    height: '25%',
    margin: '-4px auto',
    display: 'inline-block',

  }
})

const NewColorbox = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root} style={{backgroundColor: props.color.color}}>
      {props.color.name}
    </div>
  )
}

export default NewColorbox
