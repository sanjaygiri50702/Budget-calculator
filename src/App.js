import React, { Component } from 'react';
import Budgetcalculator from './Component/budget';
import { BrowserRouter as Router, Route, Link ,Redirect} from "react-router-dom";
import Homepage from './Component/Homepage'
import Registerform from './Component/Registerform';
import Loginform from './Component/Loginform';
// import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          {/* <Link to="/"></Link> */}
          <Route path="/" component={Homepage} />
          <Route path="/register" component={Registerform}/>
          <Route path="/login" component={Loginform}/>
          <Route path="/budgetcalculator" render={(props)=><Budgetcalculator {...props}/>}/>
          {/* <Route exact path="/" render={() => (this.state.loggedIn? (<Redirect to="/budgetcalculator"/>) : (<Homepage/>))}/> */}



        </Router>
      </div>
    );
  }
}

export default App;
