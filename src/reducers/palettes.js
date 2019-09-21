import {CREATE_PALETTE, REMOVE_PALETTE} from '../actions/types'
import seedColors from '../seedColors'

const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'))
const INITIAL_STATE = {
  palettes: savedPalettes || seedColors
}

export const palettes = (state=INITIAL_STATE,action) => {
  const {type,payload} = action;
  switch(type) {
    case CREATE_PALETTE: 
      return {
        ...state,
        palettes: [payload,...state.palettes]
      }
      case REMOVE_PALETTE: 
      return {
        ...state,
        palettes: state.palettes.filter(palette => palette.id !== payload)
      }
    default: 
      return state
  }
}