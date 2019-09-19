import React, { useState, useEffect } from 'react';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Button } from '@material-ui/core';
import ColorList from './ColorList';
import arrayMove from 'array-move';
import PaletteFormNavbar from './PaletteFormNavbar';
import ColorPickerForm from './ColorPickerForm';
// import useStyles from './NewPaletteForm.styles';

const drawerWidth = 350;

const useStyles = makeStyles(theme => ({
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
    margin: '-1rem 0 1.2rem 0'
  }
}));

const NewPaletteForm = props => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [currentColor, changeColor] = useState('#458474');
  const [colors, updateColors] = useState(props.palettes[0].colors);
  const [colorName, updateColorName] = useState('');
  const [newPaletteName, updateNewPaletteName] = useState('');
  const paletteMax = colors.length >= 20;

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  const addNewColor = () => {
    const newColor = {
      color: currentColor,
      name: colorName
    };
    updateColors([...colors, newColor]);
  };

  const handleSave = () => {
    let newName = newPaletteName;
    const newPalette = {
      paletteName: newName,
      id: newName.toLowerCase().replace(/ /g, '-'),
      colors: colors
    };
    props.savePalette(newPalette);
    props.history.push('/');
  };

  const deleteColor = name => {
    updateColors(colors.filter(color => color.name !== name));
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    updateColors(arrayMove(colors, oldIndex, newIndex));
  };

  const randomColor = () => {
    const allColors = props.palettes.map(palette => palette.colors).flat();
    const random = Math.floor(Math.random() * allColors.length);
    const randomColor = allColors[random];
    updateColors([...colors, randomColor]);
  };

  return (
    <div className={classes.root}>
      <PaletteFormNavbar
        open={open}
        newPaletteName={newPaletteName}
        updateNewPaletteName={updateNewPaletteName}
        handleSave={handleSave}
        handleDrawerOpen={handleDrawerOpen}
        palettes={props.palettes}
      />
      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='left'
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <div className={classes.container}>
          <Typography className={classes.title} variant='h4'>
            Design Your Palette
          </Typography>
          <div className={classes.buttons}>
            <Button
              variant='contained'
              color='secondary'
              onClick={() => updateColors([])}
            >
              Clear Palette
            </Button>
            <Button
              variant='contained'
              color='primary'
              onClick={randomColor}
              disabled={paletteMax}
            >
              Random Color
            </Button>
          </div>
          <ColorPickerForm
            colors={colors}
            addNewColor={addNewColor}
            currentColor={currentColor}
            updateColorName={updateColorName}
            colorName={colorName}
            changeColor={changeColor}
            paletteMax={paletteMax}
          />
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        <ColorList
          colors={colors}
          deleteColor={deleteColor}
          axis='xy'
          onSortEnd={onSortEnd}
        />
      </main>
    </div>
  );
};

export default NewPaletteForm;
