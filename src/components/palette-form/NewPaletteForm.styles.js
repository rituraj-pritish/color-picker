

const drawerWidth = 330;

// export default useStyles = makeStyles(theme => ({
//   root: {
//     display: 'flex'
//   },
//   hide: {
//     display: 'none'
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0
//   },
//   drawerPaper: {
//     width: drawerWidth
//   },
//   drawerHeader: {
//     display: 'flex',
//     alignItems: 'center',
//     padding: theme.spacing(0, 1),
//     ...theme.mixins.toolbar,
//     justifyContent: 'flex-end'
//   },
//   content: {
//     flexGrow: 1,
//     height: '90vh',
//     padding: theme.spacing(3),
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen
//     }),
//     marginLeft: -drawerWidth
//   },
//   contentShift: {
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen
//     }),
//     marginLeft: 0
//   },
//   container: {
//     width: '90%',
//     height: '100%',
//     margin: 'auto',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   title: {
//     fontSize: '1.5rem',
//     margin: '-1rem 0 1rem 0'
//   }
// }));

export default (theme) => ({
  root: {
    display: 'flex'
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  },
  content: {
    flexGrow: 1,
    height: '90vh',
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  container: {
    width: '90%',
    height: '100%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: '1.5rem',
    margin: '-1rem 0 1rem 0'
  }
});