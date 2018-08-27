import PropTypes from 'prop-types';
import React from 'react';

import t from '../providers/translate/translate';

const SubmitWord = ({ clear, submit }) => (
  <div className="submit-word">
    <button class="button submit-word-button" type="button" onClick={submit}>
      {t('submit.submitWord')}
    </button>
    <button class="button submit-word-button submit-word-button-reverse" type="button" onClick={clear}>
      {t('submit.clearWord')}
    </button>
  </div>
);

SubmitWord.propTypes = {
  clear: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};

export default SubmitWord;
