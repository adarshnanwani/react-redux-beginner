//Dependencies
import React, { Component } from 'react';
//Local imports
import Counter from './containers/Counter/Counter';
//Local style imports
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Counter />
      </div>
    );
  }
}

export default App;
