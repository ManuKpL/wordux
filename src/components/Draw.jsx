import PropTypes from 'prop-types';
import React from 'react';

import Letter from './Letter';

const Draw = ({ addLetter, draw, removeLetter }) => {
  const letters = draw.map(letter => (
    <Letter
      key={letter.uid}
      addLetter={addLetter}
      letter={letter}
      removeLetter={removeLetter}
    />
  ));

  return (
    <div class="draw-wrapper">
      <p>Your letters are :</p>
      <div>
        {letters}
      </div>
    </div>
  );
};

Draw.propTypes = {
  addLetter: PropTypes.func.isRequired,
  draw: PropTypes.arrayOf(Object),
  removeLetter: PropTypes.func.isRequired,
};

Draw.defaultProps = {
  draw: [],
};

export default Draw;
