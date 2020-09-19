import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Components
import Home from './components/Home/Main';
import Characters from './components/Characters/Main';
import Places from './components/Places/Main';
import Others from './components/Others/Main';

function App () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/characters' component={Characters} />
        <Route exact path='/places' component={Places} />
        <Route exact path='/others' component={Others} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
