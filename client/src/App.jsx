import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Wall from "./pages/Wall";
import GlobalStore from "./utils/context/GlobalStore";

function App() {
    return (
        <Router>
            <GlobalStore>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/wall" component={Wall} />
                    {/* <Route component={NoMatch} />  */}
                </Switch>
            </GlobalStore>
        </Router>
    );
}

export default App;
