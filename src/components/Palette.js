import React from 'react'

import './Palette.css'
import ColorBox from './ColorBox';

const Palette = (props) => {
  const colorBoxes = props.colors.map(color => (
    <ColorBox background={color.color} name={color.name} />
  ))
  return (
    <div className='Palette'>
      <div className='Palette-colors'>
        {colorBoxes}
      </div>
    </div>
  )
}

export default Palette
