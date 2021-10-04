import React from "react";
import {browserRouter as Router, Route, Switch} from "react-router-dom";
import {Navigation, Home, About, Contact} from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />}.
        </Switch>
      </Router>
    </div>
  );
}

export default App;
