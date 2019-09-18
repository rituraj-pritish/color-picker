import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import chroma from 'chroma-js';
import { withStyles } from '@material-ui/styles';

import styles from './ColorBox.styles.';



const ColorBox = ({ background, name, classes }) => {
  const [overlay, setOverlay] = useState(false);
  const isDarkColor = chroma(background).luminance() <= 0.5;

  const handleCopy = () => {
    setOverlay(true);
    setTimeout(() => {
      setOverlay(false);
    }, 1000);
  };

  return (
    <CopyToClipboard text={background} onCopy={handleCopy}>
      <div className={classes.root} style={{ background: background }}>
        <div className={`${classes.copyOverlay} ${overlay && classes.copyOverlayShow} `} />
        <div
          className={`${classes.overlayText} ${overlay && classes.overlayTextShow} ${
            classes.copyText
          } `}
        >
          <h1>Copied...</h1>
          <p>{background}</p>
        </div>
        <div>
          <div className={classes.boxContent}>
            <span className={classes.colorName}>{name}</span>
          </div>
          <button className={classes.copyButton}>COPY</button>
        </div>
      </div>
    </CopyToClipboard>
  );
};

export default withStyles(styles)(ColorBox);
