import sizes from '../sizes';
import background from '../../background.svg';

export default {
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
    fontWeight: 'bold',
    fontSize: '30px',
    display: 'flex',
    [sizes.down('xs')]: {
      height: '3rem',
      alignItems: 'center',
      fontSize: '20px'
    }
  },
  createBtn: {
    fontSize: '20px'
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
