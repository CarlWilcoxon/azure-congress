import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Nav from "../Nav/Nav";

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <Nav />
          </Route>
          <Route path="/senate">
            {/* <Senate /> */}
          </Route>
          <Route path="/house">
            {/* <House /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
