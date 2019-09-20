import React, { useEffect } from 'react';

import { ChromePicker } from 'react-color';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const useStyles = makeStyles({
  picker: {
    width: '80% !important',
    margin: '1rem auto'
  },
  addColor: {
    width: '100%',
    marginTop: '20px !important',
    fontSize: '1.2rem'
  },
  colorInput: {
    width: '100%',
    marginTop: '-1rem'
  }
});

const ColorPicker = props => {
  const classes = useStyles();
  const {
    colors,
    addNewColor,
    currentColor,
    updateColorName,
    colorName,
    changeColor,
    paletteMax
  } = props;

  //custom form validators
  useEffect(() => {
    ValidatorForm.addValidationRule('isUniqueName', value =>
      colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
    );
    ValidatorForm.addValidationRule('isUniqueColor', value =>
      colors.every(({ color }) => color !== currentColor)
    );
  }, [colors, currentColor]);
  return (
    <div>
      <ChromePicker
        className={classes.picker}
        color={currentColor}
        onChangeComplete={newColor => changeColor(newColor.hex)}
      />
      <ValidatorForm onSubmit={addNewColor}>
        <TextValidator
          className={classes.colorInput}
          value={colorName}
          validators={['required', 'isUniqueName', 'isUniqueColor']}
          errorMessages={[
            'Name required',
            'Name must be unique',
            'Color must be unique'
          ]}
          onChange={e => updateColorName(e.target.value)}
        />
        <Button
          className={classes.addColor}
          variant='contained'
          type='submit'
          color='primary'
          disabled={paletteMax}
          style={{ background: paletteMax ? 'rgba(0, 0, 0, 0.26)' : currentColor, marginTop: '50px' }}
        >
          {paletteMax ? 'Max Colors' : 'ADD COLOR'}
        </Button>
      </ValidatorForm>
    </div>
  );
};

export default ColorPicker;
