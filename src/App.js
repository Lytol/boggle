import React, { Component } from 'react';
import Board from './components/Board.js';
import Solutions from './components/Solutions.js';
import Solver from './utils/Solver.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: 4,
      values: ['s','t','e','o','v','e','s','r','f','w','n','a','p','c','a','r'],
      solutions: []
    };

    this.solve = this.solve.bind(this);
    this.edit = this.edit.bind(this);
  }

  solve() {
    const { size, values } = this.state;

    const solver = new Solver(size, values);

    let words = [];

    solver.search((word) => {
      words.push(word);
    });

    this.setState({ solutions: words });
  }

  edit() {
    const { size } = this.state;

    const input = window.prompt(`Enter ${size*size} letters (left-to-right, top-to-bottom) for the board`);

    if (!input || input.length !== size*size) {
      window.alert(`You must enter ${size*size} letters (a-z, no symbols allowed)`);
    } else {
      const newValues = [];

      for (let i = 0; i < input.length; i++) {
        newValues.push(input.charAt(i));
      }

      this.setState({
        values: newValues,
        solutions: []
      });
    }
  }

  render() {
    const { size, values, solutions } = this.state;

    return (
      <div className="app">
        <h1>Boggle</h1>

        <Board size={size} values={values} />

        <button onClick={this.solve}>Solve</button>
        <button onClick={this.edit}>Edit Board</button>

        <Solutions words={solutions} />
      </div>
    );
  }
}

export default App;
