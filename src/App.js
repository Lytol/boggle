import React, { Component } from 'react';
import Board from './components/Board.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Boggle</h1>

        <Board values={['s','t','e','o','v','e','s','r','f','w','n','a','p','c','a','r']} />
      </div>
    );
  }
}

export default App;
