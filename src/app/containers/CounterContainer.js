import { connect } from 'react-redux';
import { increment, decrement } from '../actions/actions.js';
import Counter from '../components/Counter.js'

const mapStateToProps = (state) => {
    return { count: state.counterReducer };
}

const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)