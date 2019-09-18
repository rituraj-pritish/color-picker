export default {
  root: {
    display: 'flex',
    alignItems: 'center',
    height: '6v',
    position: 'relative'
  },
  logo: {
    marginRight: '15px',
    padding: '0 13px',
    fontSize: '22px',
    backgroundColor: '#eceff1',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    '& a': {
      fontFamily: 'Roboto, sans-serif',
      textDecoration: 'none',
      color: 'black'
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
    }
  },
  selectContainer: {
    margin: '0 10px 0 auto'
  }
};
