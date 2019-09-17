import React from 'react';

import seedColors from './seedColors';
import Palette from './components/Palette';
import {generatePalette} from './colorHelper';
import './App.css';

const App = () => {
  return (
    <div>
      <Palette palette={generatePalette(seedColors[4])} />
    </div>
  );
}

export default App;
