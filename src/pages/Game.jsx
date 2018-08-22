import React from 'react';
import PropTypes from 'prop-types';

import Draw from '../components/Draw';
import Try from '../components/Try';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pointsTotal: 0,
      word: 'shared.none',
    };
    this.letters = [];
  }

  // private
  buildNewWord() {
    return this.letters.reduce((w, { value }) => w + value, '') || 'shared.none';
  }

  calculatePointsTotal() {
    return this.letters.reduce((sum, { points }) => sum + points, 0);
  }

  addLetterToWord(letter) {
    this.letters = [...this.letters, letter];
    const newWord = this.buildNewWord();
    this.setState({
      pointsTotal: this.calculatePointsTotal(),
      word: newWord,
    });
  }

  removeLetterFromWord(letter) {
    this.letters = this.letters.filter(l => l.uid !== letter.uid);
    const newWord = this.buildNewWord();
    this.setState({
      pointsTotal: this.calculatePointsTotal(),
      word: newWord,
    });
  }

  render() {
    const { draw } = this.props;
    const { pointsTotal, word } = this.state;
    return (
      <main>
        <h2>A game of words</h2>
        <Draw
          addLetter={this.addLetterToWord.bind(this)}
          draw={draw}
          removeLetter={this.removeLetterFromWord.bind(this)}
        />
        <Try word={word} points={pointsTotal} />
      </main>
    );
  }
}

Game.propTypes = {
  draw: PropTypes.arrayOf(Object),
};

Game.defaultProps = {
  draw: [],
};

export default Game;
