import PropTypes from 'prop-types';
import React from 'react';

import t from '../providers/translate/translate';

const PlayedWords = ({ values }) => {
  const elements = values.map((w) => {
    const key = `${w}-${w.timeStamp}`;
    return (<li key={key}>{`${w.word}: ${w.points} ${t('shared.points')}`}</li>);
  });

  return (
    <section>
      <h4>{t('played.yourValidatedWords')} :</h4>
      <ul>{elements}</ul>
    </section>
  );
};

PlayedWords.propTypes = {
  values: PropTypes.arrayOf(Object),
};

PlayedWords.defaultProps = {
  values: [],
};

export default PlayedWords;
