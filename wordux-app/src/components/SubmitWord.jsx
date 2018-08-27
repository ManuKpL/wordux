import PropTypes from 'prop-types';
import React from 'react';

const SubmitWord = ({ submit }) => (
  <button type="button" onClick={submit}>
    Submit
  </button>
);

SubmitWord.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default SubmitWord;
