import React from 'react';
import PropTypes from 'prop-types';

import Draw from '../components/Draw';

const Game = ({ draw }) => (
  <main>
    <h2>A game of words</h2>
    <Draw draw={draw} />
  </main>
);

Game.propTypes = {
  draw: PropTypes.arrayOf(Object),
};

Game.defaultProps = {
  draw: [],
};

export default Game;
