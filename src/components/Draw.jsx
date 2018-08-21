import PropTypes from 'prop-types';
import React from 'react';

const Draw = ({ draw }) => {
  const letters = draw
    .map(({ uid, value }) => (<li key={uid}>{value}</li>));
  return (
    <div>
      <p>Your letters are :</p>
      <ul>{letters}</ul>
    </div>
  );
};

Draw.propTypes = {
  draw: PropTypes.arrayOf(Object),
};

Draw.defaultProps = {
  draw: [],
};

export default Draw;
