import PropTypes from 'prop-types';
import React from 'react';

const ButtonRefresh = ({ redrawAll }) => (
  <button class="pull-right button-refresh" type="button" onClick={redrawAll}>
    <i class="icon-refresh" />
  </button>
);

ButtonRefresh.propTypes = {
  redrawAll: PropTypes.func.isRequired,
};

export default ButtonRefresh;
