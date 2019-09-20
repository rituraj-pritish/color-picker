import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import seedColors from './seedColors';
import Palette from './components/Palette';
import { generatePalette } from './colorHelper';
import './App.css';
import Homepage from './components/Homepage';
import NewPaletteForm from './components/palette-form/NewPaletteForm';
import Page from './components/Page';

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
    window.localStorage.setItem('palettes', JSON.stringify(palettes));
    if (palettes.length === 0) {
      updatePalettes(seedColors);
    }
  }, [palettes]);

  return (
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames='fade' timeout={500}>
            <Switch location={location}>
              <Route
                exact
                path='/palette/new'
                render={routeProps => (
                  <Page>
                    <NewPaletteForm
                      palettes={palettes}
                      savePalette={savePalette}
                      {...routeProps}
                    />
                  </Page>
                )}
              />
              <Route
                exact
                path='/'
                render={() => (
                  <Page>
                    <Homepage
                      palettes={palettes}
                      deletePalette={deletePalette}
                    />
                  </Page>
                )}
              />
              <Route
                exact
                path='/palette/:id'
                render={routeProps => (
                  <Page>
                    <Palette
                      palette={generatePalette(
                        findPalette(routeProps.match.params.id)
                      )}
                    />
                  </Page>
                )}
              />
              <Route path='/*' render={() => <Redirect to='/' />} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  );
};

export default App;
