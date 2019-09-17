import React from 'react'
import {Link} from 'react-router-dom';

const PaletteList = ({palettes}) => {
  console.log(palettes);
  const list = palettes.map(palette => (
    <li>
      <Link key={palette.id} to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
    </li>
  ))
  return (
    <div>
      {list}
    </div>
  )
}

export default PaletteList
