import React from 'react';

class Board extends React.Component {
  render() {
    const { size, values } = this.props;

    if (values.length !== size * size) {
      return (
        <div className="board__error">Invalid board</div>
      );
    }

    const rows = [];

    for (let y = 0; y < size; y++) {
      const rowLetters = [];

      for (let x = 0; x < size; x++) {
        const letter = values[y*size + x];
        rowLetters.push(letter);
      }

      rows.push(<BoardRow key={y} letters={rowLetters} />);
    }

    return (
      <div className="board">
        { rows }
      </div>
    );
  }
}

const BoardRow = ({ letters }) => {
  const squares = letters.map((letter, x) => <BoardSquare key={x} letter={letter} />);

  return (
    <div className="board__row">
      { squares }
    </div>
  );
};

const BoardSquare = ({ letter }) => (
  <div className="board__square">
    { letter }
  </div>
);

export default Board;
