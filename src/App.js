import React, { Component } from 'react';
import Board from './components/Board.js';
import Solutions from './components/Solutions.js';
import Solver from './utils/Solver.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: 4,
      values: ['s','t','e','o','v','e','s','r','f','w','n','a','p','c','a','r'],
      solutions: []
    };

    this.solve = this.solve.bind(this);
  }

  solve() {
    const { size, values } = this.state;

    const solver = new Solver(size, values);
    const words = solver.words();

    console.log(words);
  }

  render() {
    const { size, values, solutions } = this.state;

    return (
      <div className="App">
        <h1>Boggle</h1>

        <Board size={size} values={values} />

        <button onClick={this.solve}>Solve</button>

        <Solutions words={solutions} />
      </div>
    );
  }
}

export default App;
