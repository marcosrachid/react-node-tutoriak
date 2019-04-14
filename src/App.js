import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Rachid from './Rachid';
import List from './List';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "Rachid",
      email: "marcosrachid@gmail.com"
    };
    this.resetState = this.resetState.bind(this);
    this.changeInput = this.changeInput.bind(this);
  }

  resetState() {
    this.setState({
      name: "Rachid",
      email: "marcosrachid@gmail.com"
    })
  }

  changeInput(event) {
    let target = event.target;
    let index = target.name;
    this.setState({
      [index] : target.value
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          <form>
            <label>Nome
              <input type="text" name="name" value={this.state.name} onChange={this.changeInput}></input>
            </label>
            <label>Email
              <input type="text" name="email" value={this.state.email} onChange={this.changeInput}></input>
            </label>
          </form>
          {this.state.name} - {this.state.email}
        </div>
        <button onClick={this.resetState}>Reseta estado</button>
        <List></List>
      </div>
    );
  }
}

export default App;

