import PropTypes from 'prop-types';
import React from 'react';

class Letter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }

  handleClick() {
    this.setState(({ selected }) => {
      const newValue = !selected;
      if (newValue) {
        const { addLetter, letter } = this.props;
        addLetter(letter);
      } else {
        const { letter, removeLetter } = this.props;
        removeLetter(letter);
      }

      return {
        selected: !selected,
      };
    });
  }

  render() {
    const { letter } = this.props;
    const { value, points } = letter;

    const { selected } = this.state;
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
};

export default Letter;
