import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Pizzas from './components/pages/Pizzas';
import Desserts from './components/pages/Desserts';
import OrderNow from './components/pages/OrderNow';
import FullMenu from './components/pages/FullMenu';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />

        <Route path='/Pizzas' component={Pizzas} />
        <Route path='/desserts' component={Desserts} />
        <Route path='/sign-up' component={OrderNow} />
        <Route path='/FullMenu' component={FullMenu} />

      </Switch>
    </Router>
  );
}

export default App;
