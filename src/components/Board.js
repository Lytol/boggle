import React from 'react';

class Board extends React.Component {
  static Size = 4;

  render() {
    const { values } = this.props;

    if (values.length !== Board.Size * Board.Size) {
      return (
        <div className="board__error">Invalid board</div>
      );
    }

    const rows = [];

    for (let y = 0; y < Board.Size; y++) {
      const rowLetters = [];

      for (let x = 0; x < Board.Size; x++) {
        const letter = values[y*Board.Size + x];
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

  console.log(letters);

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
