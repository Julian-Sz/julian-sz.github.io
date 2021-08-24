import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home.js";
import Nav from "./components/Nav.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
