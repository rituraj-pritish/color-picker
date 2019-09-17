import React from 'react'

import PaletteList from './PaletteList';

const Homepage = ({palettes}) => {
  return (
    <div>
      <PaletteList palettes={palettes} />
    </div>
  )
}

export default Homepage
