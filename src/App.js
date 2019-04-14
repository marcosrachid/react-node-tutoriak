import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';
import routesConfig from './routesConfig';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="App">
          <Link to="/">Home</Link>
          <Link to="/user">User</Link>
        </div>
        {routesConfig.map((value, key) => (
          <Route 
          key={key} 
          path={value.path} 
          component={value.component} 
          exact={value.exact}>
          </Route>  
        ))}
      </div>
    );
  }
}

export default App;