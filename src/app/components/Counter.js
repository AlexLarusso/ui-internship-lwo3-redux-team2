import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
  constructor(props) {
    super(props);  
  }
  
  incrementIfOdd = () => {
    if (this.props.count % 2 !== 0) {
      this.props.onIncrement()
    }
  }

  incrementAsync = () => {
    setTimeout(this.props.onIncrement, 1000)
  }

  render() {
    const { count, onIncrement, onDecrement } = this.props
    return (
      <p>
        Clicked: {count.count} times
        {' '}
        <button onClick={onIncrement}>
          +
        </button>
        {' '}
        <button onClick={onDecrement}>
          -
        </button>
        {' '}
        <button onClick={this.incrementIfOdd}>
          Increment if odd
        </button>
        {' '}
        <button onClick={this.incrementAsync}>
          Increment async
        </button>
      </p>
    )
  }
}

Counter.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default Counter