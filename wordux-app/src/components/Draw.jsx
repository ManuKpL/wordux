import PropTypes from 'prop-types';
import React from 'react';

import t from '../providers/translate/translate';
import Letter from './Letter';

const Draw = ({
  addLetter, draw, removeLetter, selectedLetters,
}) => {
  const placeHolder = draw.length === 0 ? (<i>{t('shared.none')}</i>) : '';
  const letters = draw.map((letter) => {
    const letterIsSelected = !!selectedLetters.find(l => l.uid === letter.uid);
    return (
      <Letter
        key={letter.uid}
        addLetter={addLetter}
        letter={letter}
        removeLetter={removeLetter}
        selected={letterIsSelected}
      />
    );
  });

  return (
    <section class="draw-wrapper">
      <p>{t('draw.yourDraw')} : {placeHolder}</p>
      <div>
        {letters}
      </div>
    </section>
  );
};

Draw.propTypes = {
  addLetter: PropTypes.func.isRequired,
  draw: PropTypes.arrayOf(Object),
  removeLetter: PropTypes.func.isRequired,
  selectedLetters: PropTypes.arrayOf(Object),
};

Draw.defaultProps = {
  draw: [],
  selectedLetters: [],
};

export default Draw;
