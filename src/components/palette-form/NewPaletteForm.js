import React, { useState } from 'react';

import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
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
import useStyles from './NewPaletteForm.styles';

const NewPaletteForm = props => {

  const { classes,palettes,savePalette } = props;
  const [open, setOpen] = useState(false);
  const [currentColor, changeColor] = useState('#458474');
  const [colors, updateColors] = useState(props.palettes[0].colors);
  const [colorName, updateColorName] = useState('');
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

  const deleteColor = name => {
    updateColors(colors.filter(color => color.name !== name));
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    updateColors(arrayMove(colors, oldIndex, newIndex));
  };

  const randomColor = () => {
    const allColors = palettes.map(palette => palette.colors).flat();
    const random = Math.floor(Math.random() * allColors.length);
    const randomColor = allColors[random];
    updateColors([...colors, randomColor]);
  };

  //create new palette
  const handleSave = newPalette => {
    newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, '-');
    newPalette.colors = colors;
    savePalette(newPalette);
    props.history.push('/');
  };

  return (
    <div className={classes.root}>
      <PaletteFormNavbar
        open={open}
        handleSave={handleSave}
        handleDrawerOpen={handleDrawerOpen}
        palettes={palettes}
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

export default withStyles(useStyles)(NewPaletteForm);
