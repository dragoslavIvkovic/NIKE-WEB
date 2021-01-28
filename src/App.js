import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Men from "./components/pages/Men/Men";
import Women from "./components/pages/Women/Women";
import SingIn from "./components/pages/SingIn";

import Cart from "./components/pages/Cart";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/Men" component={Men} />
        <Route path="/Cart" component={Cart} />
        <Route path="/Women" component={Women} />

        <Route path="/SingIn" component={SingIn} />
      </Switch>
    </Router>
  );
}

export default App;
