import React from 'react';
import ReactDOM from 'react-dom';

import Game from './pages/Game';

class WorduxLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      draw: [
        {
          uid: 0,
          value: 'D',
          points: 2,
          modifiers: [],
        },
        {
          uid: 1,
          value: 'W',
          points: 10,
          modifiers: [],
        },
        {
          uid: 2,
          value: 'A',
          points: 1,
          modifiers: [],
        },
        {
          uid: 3,
          value: 'G',
          points: 3,
          modifiers: [],
        },
        {
          uid: 4,
          value: 'N',
          points: 1,
          modifiers: [],
        },
        {
          uid: 5,
          value: 'I',
          points: 1,
          modifiers: [],
        },
        {
          uid: 6,
          value: 'R',
          points: 1,
          modifiers: [],
        },
      ],
    };
  }

  render() {
    const { draw } = this.state;
    return (
      <div>
        <h1>Hello Wordux!</h1>
        <Game draw={draw} />
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<WorduxLayout />, app);
