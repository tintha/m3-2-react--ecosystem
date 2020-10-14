import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import About from './About';

const App = (props) => {
  return (
    <div>
      <Router>
      <Header />
     
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exatc path="/items/:itemId"></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
