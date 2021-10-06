import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { DataPage, Form, Home, Navigation } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />}/>
          <Route path="/form" exact component={() => <Form />}/>
          <Route path="/data" exact component={() => <DataPage />}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
