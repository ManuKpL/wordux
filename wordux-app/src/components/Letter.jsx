import PropTypes from 'prop-types';
import React from 'react';

class Letter extends React.Component {
  handleClick() {
    const { selected } = this.props;
    const newValue = !selected;
    if (newValue) {
      const { addLetter, letter } = this.props;
      addLetter(letter);
    } else {
      const { letter, removeLetter } = this.props;
      removeLetter(letter);
    }
  }

  render() {
    const { letter, selected } = this.props;
    const { value, points } = letter;
    const className = (selected && 'letter-selected') || '';
    return (
      <button
        type="button"
        class={`button letter-wrapper ${className}`}
        onClick={this.handleClick.bind(this)}
      >
        <b>{value}</b>
        <span class={className}>{points}</span>
      </button>
    );
  }
}

Letter.propTypes = {
  addLetter: PropTypes.func.isRequired,
  letter: PropTypes.objectOf(Object).isRequired,
  removeLetter: PropTypes.func.isRequired,
  selected: PropTypes.bool,
};

Letter.defaultProps = {
  selected: false,
};

export default Letter;
