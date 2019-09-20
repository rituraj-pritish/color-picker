export default {
  root: {
    backgroundColor: '#fff',
    border: '1px solid black',
    borderRadius: '5px',
    padding: '0.5rem',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    '&:hover svg': {
      opacity: 1
    }
  },
  colors: {
    backgroundColor: '#dae1e4',
    height: '68px',
    width: '100%',
    borderRadius: '5px',
    overflow: 'hidden'
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
    color: 'black',
    paddingTop: '0.5rem',
    position: 'relative',
    backgroundColor: '#dae1e4'
  },
  emoji: {
    marginLeft: '0.5rem',
    fontSize: '1.5rem',
    backgroundColor: '#dae1e4'
  },
  miniColor: {
    height: '27%',
    width: '20%',
    display: 'inline-block',
    margin: '-3.5px auto',
    position: 'relative'
  },
  delete: {
    '& svg': {
      position: 'absolute',
      zIndex: '5',
      background: 'red',
      borderRadius: '3px',
      right: 0,
      marginRight: '8px',
      opacity: 0,
      transition: 'all 0.3s ease-in-out'
    }
  }
};
