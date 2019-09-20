import chroma from 'chroma-js';
import sizes from '../sizes';

export default {
  root: {
    position: 'relative',
    width: '20%',
    height: '25%',
    margin: '0 auto',
    display: 'inline-block',
    marginBottom: '-7px',
    '&:hover button': {
      opacity: 1
    },
    [sizes.down('md')]: {
      width: '25%',
      height: '20%'
    },
    [sizes.down('sm')]: {
      width: '50%',
      height: '10%'
    },
    [sizes.down('xs')]: {
      width: '100%',
      height: '5%'
    }
  },
  copyText: {
    color: props =>
      chroma(props.background).luminance() <= 0.5 ? 'white' : 'black'
  },
  colorName: {
    color: props =>
      chroma(props.background).luminance() <= 0.5 ? 'white' : 'black'
  },
  boxContent: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    margin: '5px 10px',
    textTransform: 'uppercase',
    fontSize: '0.8rem',
    letterSpacing: '1px'
  },
  copyOverlay: {
    background: 'inherit',
    opacity: 0,
    zIndex: 0,
    width: '100%',
    height: '100%',
    transition: 'transform 0.5s ease-in-out',
    transform: 'scale(0.1)'
  },
  overlayText: {
    color: 'white',
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '3rem',
    opacity: 0,
    transform: 'scale(0.1)',
    textAlign: 'center',
    '& h': {
      fontWeight: 400,
      background: 'rgba(255, 255, 255, 0.4)',
      textShadow: '1px 2px black',
      width: ' 100%'
    },
    '& p': {
      display: 'block',
      fontSize: ' 2rem',
      margin: '10px 0'
    }
  },
  copyButton: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    width: '40%',
    minWidth: '40px',
    background: 'rgba(255, 255, 255, 0.2)',
    textAlign: 'center',
    padding: '5px 10px',
    opacity: 0,
    color: props =>
      chroma(props.background).luminance() <= 0.5 ? 'white' : 'black'
  },
  overlayTextShow: {
    zIndex: 25,
    opacity: 1,
    transform: 'scale(1)',
    transition: 'all 0.5s ease-in-out',
    transitionDelay: '0.3s'
  },
  copyOverlayShow: {
    opacity: 1,
    transform: 'scale(50)',
    zIndex: 20,
    position: 'absolute'
  }
};
