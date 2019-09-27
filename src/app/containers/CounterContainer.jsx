import { connect } from 'react-redux';
import { increment, decrement } from '../actions/actions';
import Counter from '../components/Counter';

const mapStateToProps = (state) => ({ count: state.counterReducer });

const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch(increment()),
  onDecrement: () => dispatch(decrement()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
