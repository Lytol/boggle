import React from 'react';

class Solutions extends React.Component {
  render() {
    const { words } = this.props;

    const solutions = words.map((word, index) => <li key={word + `-${index}`} className="solutions__word">{word}</li>);

    return (
      <ul className="solutions">
        { solutions }
      </ul>
    );
  }
}

export default Solutions;
