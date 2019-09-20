import React from 'react'

import PaletteList from './PaletteList';

const Homepage = ({palettes,deletePalette}) => {
  return (
    <div>
      <PaletteList  deletePalette={deletePalette} palettes={palettes} />
    </div>
  )
}

export default Homepage
