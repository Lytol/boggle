class Solver {
  constructor(size, values) {
    this.size = size;
    this.values = values;

    this.matrix = this.buildMatrix(size, values);
  }

  buildMatrix(size, values) {
    const matrix = [];

    for (let y = 0; y < size; y++) {
      matrix.push([]);

      for (let x = 0; x < size; x++) {
        matrix[y].push(values[y*size+x]);
      }
    }

    return matrix;
  }

  words() {
    return [
      'this',
      'is',
      'sample',
      'output'
    ];
  }
}

export default Solver;
