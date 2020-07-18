import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
      <Router>
          <div>
              
              <Switch>
                  <Route exact path="/" component={Home} />
                  {/* <Route exact path="/saved" component={Saved} />
                  <Route component={NoMatch} /> */}
              </Switch>
          </div>
      </Router>
  );
}

export default App;
