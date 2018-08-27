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
      currentPoints: 0,
      playedWords: [],
      selectedLetters: [],
      word: 'shared.none',
    };
    this.promise = undefined;
  }

  // PRIVATES ..................................................................

  buildNewWord(letters) {
    return letters.reduce((w, { value }) => w + value, '') || 'shared.none';
  }

  calculateCurrentPoints(letters) {
    return letters.reduce((sum, { points }) => sum + points, 0);
  }

  updateStateInGame(selectedLetters) {
    const newWord = this.buildNewWord(selectedLetters);
    return {
      currentPoints: this.calculateCurrentPoints(selectedLetters),
      selectedLetters,
      word: newWord,
    };
  }

  // GAME LOGIC ................................................................

  addLetterToWord(letter) {
    this.setState(({ selectedLetters }) => {
      const newLetters = [...selectedLetters, letter];
      return this.updateStateInGame(newLetters);
    });
  }

  removeLetterFromWord(letter) {
    this.setState(({ selectedLetters }) => {
      const newLetters = selectedLetters.filter(l => l.uid !== letter.uid);
      return this.updateStateInGame(newLetters);
    });
  }

  removeWord() {
    this.setState({
      currentPoints: undefined,
      selectedLetters: [],
      word: undefined,
    });
  }

  saveWord() {
    this.setState(({ currentPoints, playedWords, word }) => ({
      currentPoints: undefined,
      playedWords: playedWords.concat({
        points: currentPoints,
        timeStamp: Date.now(),
        word,
      }),
      selectedLetters: [],
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
        });
    }
  }

  // RENDER ....................................................................

  render() {
    const { draw } = this.props;
    const {
      currentPoints, playedWords, selectedLetters, word,
    } = this.state;

    return (
      <main>
        <h2>A game of words</h2>
        <Draw
          addLetter={this.addLetterToWord.bind(this)}
          draw={draw}
          removeLetter={this.removeLetterFromWord.bind(this)}
          selectedLetters={selectedLetters}
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
