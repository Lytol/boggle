import Dictionary from './Dictionary';

class Solver {
  static MinLength = 3;

  constructor(size, values) {
    this.size = size;
    this.values = values;

    this.matrix = this._buildMatrix(size, values);

    // TODO: Perhaps pass this in for DI purposes
    this.dictionary = new Dictionary();
  }

  // This function will call `fn` for each found word, passing
  // the word as the only argument.
  search(fn) {
    const visited = this._buildVisitedMatrix();

    for (let y = 0; y < this.size; y++) {
      for (let x = 0; x < this.size; x++) {
        this._searchUtil(fn, x, y, "", visited);
      }
    }
  }

  _searchUtil(fn, x, y, prefix, visited) {
    const word = prefix + this.matrix[x][y];
    visited[x][y] = true

    if (word.length >= Solver.MinLength && this.dictionary.hasWord(word)) {
      fn(word)
    }

    // Recursively call with every adjacent node (that isn't out of range or visited already)
    for (let i = x-1; i <= x+1; i++) {
      for (let j = y-1; j <= y+1; j++) {
        if (i >= 0 && i < this.size && j >= 0 && j < this.size && !visited[i][j]) {
          this._searchUtil(fn, i, j, word, visited);
        }
      }
    }

    // Don't forget to unwind the visited matrix!
    visited[x][y] = false
  }

  _buildMatrix(size, values) {
    const matrix = [];

    for (let y = 0; y < size; y++) {
      matrix.push([]);

      for (let x = 0; x < size; x++) {
        matrix[y].push(values[y*size+x]);
      }
    }

    return matrix;
  }

  _buildVisitedMatrix() {
    const matrix = [];

    for (let y = 0; y < this.size; y++) {
      matrix.push([]);

      for (let x = 0; x < this.size; x++) {
        matrix[y].push(false);
      }
    }

    return matrix;
  }
}

export default Solver;
