import WORDS from '../db/words.js';

class Dictionary {
  constructor() {
    this.words = this._createLookupTable(WORDS);
  }

  hasWord(str) {
    return this.words.has(str);
  }

  _createLookupTable(words) {
    const lookup = new Map();

    // NOTE: Using boolean for the value but doesn't really matter
    // since we're using key existence for the lookup.
    words.forEach((word) => {
      lookup.set(word, true);
    });

    return lookup;
  }
}

export default Dictionary;
