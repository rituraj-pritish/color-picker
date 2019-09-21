import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';

import Palette from './components/Palette';
import { generatePalette } from './colorHelper';
import './App.css';
import Homepage from './components/Homepage';
import NewPaletteForm from './components/palette-form/NewPaletteForm';
import Page from './components/Page';

const App = props => {
  const { palettes } = props;

  const findPalette = id => {
    return palettes.find(palette => palette.id === id);
  };

  useEffect(() => {
    window.localStorage.setItem('palettes', JSON.stringify(palettes));
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
                    <NewPaletteForm {...routeProps} />
                  </Page>
                )}
              />
              <Route
                exact
                path='/'
                render={() => (
                  <Page>
                    <Homepage />
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

const mapStateToProps = state => ({
  palettes: state.palettes.palettes
});

export default connect(mapStateToProps)(App);
