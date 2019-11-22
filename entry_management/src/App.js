import React from 'react';
import './App.css';
import { Component } from 'react'; 
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from "./components/home"
import addHost from "./components/addHost"
import checkinVisitor from "./components/checkinVisitor"
import checkoutVisitor from "./components/checkoutVisitor"

class App extends Component {
  render() {
    return (
      <Router>
        <div class="App">
          <Route exact path="/" component={Home} />
          <div class="container">
            <Route exact path="/addHost" component={addHost} />
            <Route exact path="/checkinVisitor" component={checkinVisitor} />
            <Route exact path="/checkoutVisitor" component={checkoutVisitor} />
          </div>
        </div>
      </Router>
    )
  }
}
export default App;
