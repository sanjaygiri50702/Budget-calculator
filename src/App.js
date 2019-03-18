import React, { Component } from 'react';
import budgetcalculator from './Component/budget';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Link to="/"></Link>
        <Route path="/" component={budgetcalculator} />

        </Router>
      </div>
    );
  }
}

export default App;
