import PropTypes from 'prop-types';
import React from 'react';

import t from '../providers/translate/translate';

const SubmitWord = ({ submit }) => (
  <div className="submit-word">
    <button class="button" type="button" onClick={submit}>
      {t('shared.submit')}
    </button>
  </div>
);

SubmitWord.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default SubmitWord;
