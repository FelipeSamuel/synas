import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { createBrowserHistory } from 'history';

//THEME
import { themes } from './theme';

//CONTAINERS
import Page from './pages';
import TermsAndConditions from './pages/TermsAndConditions';

import './App.css';

const history = createBrowserHistory();

function App() {
  return (
    <ThemeProvider theme={themes}>
      <BrowserRouter basename={'/'} history={history}>
        <Switch>
          <Route exact path="/privacy" component={TermsAndConditions} />
          <Route exact path="/" component={Page} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
