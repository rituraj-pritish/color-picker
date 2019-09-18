import React from 'react';
import { Route, Switch } from 'react-router-dom';

import seedColors from './seedColors';
import Palette from './components/Palette';
import { generatePalette } from './colorHelper';
import './App.css';
import Homepage from './components/Homepage';
import NewPaletteForm from './components/NewPaletteForm'

const App = () => {
  const findPalette = id => {
    return seedColors.find(palette => palette.id === id);
  };

  return (
    <Switch>
      <Route exact path='/palette/new' render={()=> <NewPaletteForm/>} />
      <Route exact path='/' render={() => <Homepage palettes={seedColors} />} />
      <Route
        exact
        path='/palette/:id'
        rout
        render={routeProps => (
          <Palette
            palette={generatePalette(findPalette(routeProps.match.params.id))}
          />
        )}
      />
    </Switch>
    // <div>
    //   <Palette palette={generatePalette(seedColors[4])} />
    // </div>
  );
};

export default App;
