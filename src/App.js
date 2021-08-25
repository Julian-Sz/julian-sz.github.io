import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./components/Home.js";
import Nav from "./components/Nav.js";
import Contact from "./components/Contact.js";
import "./App.css";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <div>
        <Nav />
        <AnimatePresence exitBeforeEnter initial={false}>
          <Switch location={location} key={location.pathname}>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
