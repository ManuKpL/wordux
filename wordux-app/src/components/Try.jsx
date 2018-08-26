import PropTypes from 'prop-types';
import React from 'react';

import t from '../providers/translate/translate';

const Try = ({ points, word }) => {
  let placeHolder;
  let wordElement;

  const isPlaceHolder = /[a-z]+/.test(word);
  if (isPlaceHolder) {
    placeHolder = (<i>{t(word)}</i>);
    wordElement = '';
  } else {
    placeHolder = '';
    wordElement = (<span>{word} <em>{`(${points} ${t('shared.points')}`})</em></span>);
  }

  return (
    <section class="try-wrapper">
      <p>{t('try.yourTry')} : {placeHolder}</p>
      <div>{wordElement}</div>
    </section>
  );
};

Try.propTypes = {
  points: PropTypes.number,
  word: PropTypes.string,
};

Try.defaultProps = {
  points: 0,
  word: 'shared.none',
};

export default Try;
