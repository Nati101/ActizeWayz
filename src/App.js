import React from "react";
import "./App.css";
import NavBar from "./componets/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./componets/pages/Home";
import About from "./componets/pages/About";
import Contact from "./componets/pages/Contact";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
