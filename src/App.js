import React from "react";
import Nav from "./Nav";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/features" component={Features} />
          <Route path="/pricing" component={Pricing} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
