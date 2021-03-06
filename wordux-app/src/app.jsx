import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';

import { sample, shuffle } from 'lodash';

import Game from './pages/Game';

class WorduxLayout extends React.Component {
  constructor(props) {
    super(props);

    this.DRAW_LENGTH = 12;
    this.INITIAL_LIST = [];

    this.dynamicList = [];
    this.state = {
      canDrawAgain: false,
      draw: [],
      remainingCount: this.dynamicList.length,
    };
  }

  // ASYNC .....................................................................

  componentWillMount() {
    axios.get('/api/letters')
      .then(({ data }) => {
        this.INITIAL_LIST = data.lettersList;
        this.dynamicList = shuffle([...this.INITIAL_LIST]);
        this.drawLetter();
      });
  }

  // GAME LOGIC ................................................................

  drawLetter(lettersToDraw = this.DRAW_LENGTH) {
    const randomLetter = sample(this.dynamicList);
    this.dynamicList = this.dynamicList.filter(({ uid }) => uid !== randomLetter.uid);
    setTimeout(() => {
      this.setState(({ draw }) => ({
        canDrawAgain: lettersToDraw === 1,
        draw: [...draw, randomLetter],
        remainingCount: this.dynamicList.length,
      }));
    }, 400);
  }

  removeLettersFromDraw(letters = []) {
    this.setState(({ draw }) => {
      const newDraw = draw.filter(l => !letters.find(e => e.uid === l.uid));
      return {
        canDrawAgain: false,
        draw: newDraw,
      };
    });
  }

  submitWord(word) {
    return axios.get(`/api/words/${word}`)
      .then(({ data }) => data.validity);
  }

  // PRIVATES ..................................................................

  howManyLettersToDraw() {
    const { draw, remainingCount } = this.state;
    if (remainingCount === 0) {
      return 0;
    }

    const missingLetters = this.DRAW_LENGTH - draw.length;
    return Math.min(missingLetters, remainingCount);
  }

  // RENDER ....................................................................

  render() {
    const { canDrawAgain, draw, remainingCount } = this.state;
    const lettersToDraw = this.howManyLettersToDraw();

    if (remainingCount > 0 && lettersToDraw > 0) {
      this.drawLetter(lettersToDraw);
    }

    return (
      <div>
        <h1>Hello Wordux!</h1>
        <Game
          draw={draw}
          canDrawAgain={canDrawAgain}
          removeLettersFromDraw={this.removeLettersFromDraw.bind(this)}
          submitWord={this.submitWord.bind(this)}
        />
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<WorduxLayout />, app);
