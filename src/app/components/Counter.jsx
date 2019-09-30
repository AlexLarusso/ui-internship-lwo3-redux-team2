import React from 'react';
import PropTypes from 'prop-types';

function Counter(props) {
  const incrementIfOdd = () => {
    if (props.count % 2 !== 0) {
      props.onIncrement();
    }
  };
  const incrementAsync = () => {
    setTimeout(props.onIncrement, 1000);
  };
  const { count, onIncrement, onDecrement } = props;

  return (
    <p>
      Clicked:
      {' '}
      {count.count}
      {' '}
      times
      {' '}
      <button type="submit" onClick={onIncrement}>
        +
      </button>
      {' '}
      <button type="submit" onClick={onDecrement}>
        -
      </button>
      {' '}
      <button type="submit" onClick={incrementIfOdd}>
        Increment if odd
      </button>
      {' '}
      <button type="submit" onClick={incrementAsync}>
        Increment async
      </button>
    </p>
  );
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default Counter;
