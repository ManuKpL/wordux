import PropTypes from 'prop-types';
import React from 'react';

import t from '../providers/translate/translate';

const Try = ({ word }) => {
  let wordElement;
  if (/[a-z]+/.test(word)) {
    wordElement = (<i>{t(word)}</i>);
  } else {
    wordElement = (<b>{word}</b>);
  }

  return (
    <div class="draw-wrapper">
      <p>{t('try.yourTry')} : {wordElement}</p>
    </div>
  );
};

Try.propTypes = {
  word: PropTypes.string,
};

Try.defaultProps = {
  word: 'try.none',
};

export default Try;
