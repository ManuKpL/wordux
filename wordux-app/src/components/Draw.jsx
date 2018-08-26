import PropTypes from 'prop-types';
import React from 'react';

import t from '../providers/translate/translate';
import Letter from './Letter';

const Draw = ({ addLetter, draw, removeLetter }) => {
  const placeHolder = draw.length === 0 ? (<i>{t('shared.none')}</i>) : '';
  const letters = draw.map(letter => (
    <Letter
      key={letter.uid}
      addLetter={addLetter}
      letter={letter}
      removeLetter={removeLetter}
    />
  ));

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
};

Draw.defaultProps = {
  draw: [],
};

export default Draw;
