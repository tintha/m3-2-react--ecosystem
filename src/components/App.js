import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { useParams } from "react-router";

import Header from './Header';
import Home from './Home';
import About from './About';
import ItemDetails from './ItemDetails';

function ItemPost() {
  let { itemId } = useParams()
  return <ItemDetails itemId={itemId}/>
}

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
            <Route path="/:itemId">
              <ItemPost />
             </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
