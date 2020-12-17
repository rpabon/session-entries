import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Welcome } from './pages/Welcome';
import { Sessions } from './pages/Sessions/Sessions';
import { Session } from './pages/Session/Session';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Welcome />
        </Route>
        <Route path="/sessions">
          <Sessions />
        </Route>
        <Route path="/session/:id?">
          <Session />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
