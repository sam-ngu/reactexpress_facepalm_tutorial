import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Wall from './pages/Wall';

function App() {
  return (
      <Router>
          <div>
              
              <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/wall" component={Wall} />
                  {/* <Route component={NoMatch} />  */}
              </Switch>
          </div>
      </Router>
  );
}

export default App;
