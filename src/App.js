import React, { useState,useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import seedColors from './seedColors';
import Palette from './components/Palette';
import { generatePalette } from './colorHelper';
import './App.css';
import Homepage from './components/Homepage';
import NewPaletteForm from './components/palette-form/NewPaletteForm';

const App = () => {
  const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
  const [palettes, updatePalettes] = useState(savedPalettes || seedColors);

  const findPalette = id => {
    return palettes.find(palette => palette.id === id);
  };

  const savePalette = newPalette => {
    updatePalettes([newPalette, ...palettes]);
  };

  const deletePalette = id => {
    updatePalettes(palettes.filter(palette => palette.id !== id));
  };

  useEffect(() => {
    window.localStorage.setItem('palettes',JSON.stringify(palettes));
    if(palettes.length === 0) {
      updatePalettes(seedColors)
    }
  },[palettes])

  return (
    <Switch>
      <Route
        exact
        path='/palette/new'
        render={routeProps => (
          <NewPaletteForm
            palettes={palettes}
            savePalette={savePalette}
            {...routeProps}
          />
        )}
      />
      <Route exact path='/' render={() => <Homepage palettes={palettes} deletePalette={deletePalette} />} />
      <Route
        exact
        path='/palette/:id'
        render={routeProps => (
          <Palette
            palette={generatePalette(findPalette(routeProps.match.params.id))}
          />
        )}
      />
      <Route path='/*' render={() => <Redirect to='/' />} />
    </Switch>
    // <div>
    //   <Palette palette={generatePalette(seedColors[4])} />
    // </div>
  );
};

export default App;
