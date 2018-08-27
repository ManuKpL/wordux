import React from 'react';
import PropTypes from 'prop-types';

import Draw from '../components/Draw';
import PlayedWords from '../components/PlayedWords';
import Try from '../components/Try';
import SubmitWord from '../components/SubmitWord';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playedWords: [],
      currentPoints: 0,
      word: 'shared.none',
    };
    this.letters = [];
    this.promise = undefined;
  }

  // PRIVATES ..................................................................

  buildNewWord() {
    return this.letters.reduce((w, { value }) => w + value, '') || 'shared.none';
  }

  calculateCurrentPoints() {
    return this.letters.reduce((sum, { points }) => sum + points, 0);
  }

  // GAME LOGIC ................................................................

  addLetterToWord(letter) {
    this.letters = [...this.letters, letter];
    const newWord = this.buildNewWord();
    this.setState({
      currentPoints: this.calculateCurrentPoints(),
      word: newWord,
    });
  }

  removeLetterFromWord(letter) {
    this.letters = this.letters.filter(l => l.uid !== letter.uid);
    const newWord = this.buildNewWord();
    this.setState({
      currentPoints: this.calculateCurrentPoints(),
      word: newWord,
    });
  }

  removeWord() {
    this.setState({
      currentPoints: undefined,
      word: undefined,
    });
  }

  saveWord() {
    this.setState(({ currentPoints, playedWords, word }) => ({
      playedWords: playedWords.concat({
        points: currentPoints,
        timeStamp: Date.now(),
        word,
      }),
      currentPoints: undefined,
      word: undefined,
    }));
  }

  submitWord() {
    const { submitWord } = this.props;
    const { word } = this.state;

    if (word && word.length > 1 && !this.promise) {
      this.promise = submitWord(word)
        .then((wordIsValid) => {
          if (wordIsValid) {
            this.saveWord();
          } else {
            this.removeWord();
          }
        })
        .then(() => {
          this.promise = undefined;
          this.letters = [];
        });
    }
  }

  // RENDER ....................................................................

  render() {
    const { draw } = this.props;
    const { currentPoints, playedWords, word } = this.state;

    return (
      <main>
        <h2>A game of words</h2>
        <Draw
          addLetter={this.addLetterToWord.bind(this)}
          draw={draw}
          removeLetter={this.removeLetterFromWord.bind(this)}
        />
        <Try word={word} points={currentPoints} />
        <SubmitWord submit={this.submitWord.bind(this)} />
        <PlayedWords values={playedWords} />
      </main>
    );
  }
}

Game.propTypes = {
  draw: PropTypes.arrayOf(Object),
  submitWord: PropTypes.func.isRequired,
};

Game.defaultProps = {
  draw: [],
};

export default Game;
