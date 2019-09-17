import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import './ColorBox.css';

const ColorBox = ({ background, name }) => {
  const [overlay, setOverlay] = useState(false);

  const handleCopy = () => {
    setOverlay(true);
    setTimeout(() => {
      setOverlay(false);
    }, 1000);
  };

  return (
    <CopyToClipboard text={background} onCopy={handleCopy}>
      <div className='ColorBox' style={{ background: background }}>
        <div className={`copy-overlay ${overlay && 'show'} `} />
        <div className={`overlay-text ${overlay && 'show'} `}>
          <h1>Copied...</h1>
          <p>{name}</p>
        </div>
        <div className='copy-container'>
          <div className='box-content'>
            <span>{name}</span>
          </div>
          <button className='copy-button'>COPY</button>
        </div>
        <button className='more'>MORE</button>
      </div>
    </CopyToClipboard>
  );
};

export default ColorBox;
