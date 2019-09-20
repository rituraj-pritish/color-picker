import sizes from '../sizes';

export default {
  root: {
    display: 'flex',
    alignItems: 'center',
    height: '6vh',
    position: 'relative',
    [sizes.down('sm')]: {
      height: '8vh'
    },
    [sizes.down('xs')]: {
      height: '10vh',
      margin: 'auto',
      flexDirection: 'column',
      paddingTop: '6px'
    }
  },
  logo: {
    marginRight: '15px',
    padding: '0 13px',
    fontSize: '22px',
    backgroundColor: '#eceff1',
    height: '100%',
    minWidth: '150px',
    display: 'flex',
    alignItems: 'center',
    '& a': {
      fontFamily: 'Roboto, sans-serif',
      textDecoration: 'none',
      color: 'black'
    },
    [sizes.down('xs')]: {
      display: 'none'
    }
  },
  slider: {
    width: '400px',
    margin: '0 10px',
    display: 'inline-block',
    '& .rc-slider-track': {
      backgroundColor: 'transparent'
    },
    '& .rc-slider-rail': {
      height: '8px'
    },
    '& .rc-slider-handle,.rc-slider-handle:active,.rc-slider-handle:focus,.rc-slider-handle:hover': {
      backgroundColor: 'green',
      outline: 'none',
      border: '2px solid green',
      boxShadow: 'none',
      width: '15px',
      marginTop: '-3px'
    },
    [sizes.down('sm')]: {
      width: '300px'
    },
    [sizes.down('xs')]: {
      width: '60vw'
    }
  },
  selectContainer: {
    margin: '0 10px 0 auto',
    [sizes.down('xs')]: {
      margin: 'auto'
    }
  },
  back: {
    display: 'none'
  }
};
