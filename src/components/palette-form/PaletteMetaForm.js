import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const PaletteMetaForm = props => {
  const { palettes, handleSave } = props;
  const [newPaletteName, updateNewPaletteName] = useState('');
  const [stage, setStage] = useState('');

  //custom form validators
  useEffect(() => {
    ValidatorForm.addValidationRule('isUniquePalette', value =>
      palettes.every(
        ({ paletteName }) =>
          paletteName.toLowerCase() !== newPaletteName.toLowerCase()
      )
    );
  }, [newPaletteName, palettes]);

  function handleClickOpen() {
    setStage('name');
  }

  function handleClose() {
    setStage('');
  }

  const handleEmojiSelect = (emoji)=> {
    const newPalette = {
      paletteName: newPaletteName,
      emoji: emoji.native
    }
    handleSave(newPalette)
  }

  return (
    <div>
      <Button variant='outlined' color='primary' onClick={handleClickOpen}>
        Create Palette
      </Button>
      <Dialog open={stage === 'emoji'}onClose={handleClose} >
        <Picker title='Choose a Palette Emoji' onSelect={handleEmojiSelect} />
      </Dialog>
      <Dialog
        open={stage === 'name'}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        <ValidatorForm onSubmit={()=>setStage('emoji')}>
          <DialogTitle id='form-dialog-title'>Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Choose a name for your palette.
            </DialogContentText>

            <TextValidator
              label='Palette Name'
              value={newPaletteName}
              fullWidth
              margin='normal'
              validators={['required', 'isUniquePalette']}
              errorMessages={[
                'Name is Required',
                'Palette name already exists'
              ]}
              onChange={e => {
                updateNewPaletteName(e.target.value);
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color='primary'>
              Cancel
            </Button>
            <Button
              variant='contained'
              type='submit'
              color='primary'
              
            >
              Save
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    </div>
  );
};

export default PaletteMetaForm;
