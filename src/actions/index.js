import {CREATE_PALETTE, REMOVE_PALETTE} from './types' 

//create palette
export const createPalette = (palette) => ({
  type: CREATE_PALETTE,
  payload: palette
})

//remove palette
export const deletePalette = (id) => ({
  type: REMOVE_PALETTE,
  payload: id
})
