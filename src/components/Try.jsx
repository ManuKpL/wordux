import PropTypes from 'prop-types';
import React from 'react';

const Try = ({ word }) => {
  let wordElement;
  if (/[a-z]+/.test(word)) {
    wordElement = (<i>{word}</i>);
  } else {
    wordElement = (<b>{word}</b>);
  }

  return (
    <div class="draw-wrapper">
      <p>Your try : {wordElement}</p>
    </div>
  );
};

Try.propTypes = {
  word: PropTypes.string,
};

Try.defaultProps = {
  word: 'None',
};

export default Try;
