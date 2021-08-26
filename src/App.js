import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./components/Home.js";
import Nav from "./components/Nav.js";
import Contact from "./components/Contact.js";
import "./App.css";
import { AnimatePresence, LazyMotion } from "framer-motion";

const loadFeatures = () =>
  import("./framer-motion-features.js").then((res) => res.default);

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <LazyMotion features={loadFeatures} strict>
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
      </LazyMotion>
    </div>
  );
}

export default App;
