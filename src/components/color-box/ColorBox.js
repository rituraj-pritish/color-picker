import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { withStyles } from '@material-ui/styles';

import styles from './ColorBox.styles.';
import clsx from 'clsx';

const ColorBox = ({ background, name, classes }) => {
  const [overlay, setOverlay] = useState(false);

  const handleCopy = () => {
    setOverlay(true);
    setTimeout(() => {
      setOverlay(false);
    }, 1000);
  };

  return (
    <CopyToClipboard text={background} onCopy={handleCopy}>
      <div className={classes.root} style={{ background: background }}>
        <div
          className={clsx(classes.copyOverlay, {
            [classes.copyOverlayShow]: overlay
          })}
        />

        <div
          className={clsx(classes.overlayText, {
            [classes.overlayTextShow]: overlay
          })}
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
