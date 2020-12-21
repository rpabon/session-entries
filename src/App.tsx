import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Welcome } from './pages/Welcome';
import { Sessions } from './pages/Sessions/Sessions';
import { Session } from './pages/Session/Session';

function App() {
  return (
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
  );
}

export default App;
