import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Wall from "./pages/Wall";
import GlobalStore from "./utils/context/GlobalStore";


// components (dumb component)  (cell)
// generic 
// button
// card
// popup

// container (smart component) (organ)
// specific to a page

// page  (system)







function App() {

    return (

        <Router>
            <GlobalStore.GlobalProvider>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/wall" component={Wall} />
                    {/* <Route component={NoMatch} />  */}
                </Switch>
            </GlobalStore.GlobalProvider>
        </Router>
    );
}

export default App;
