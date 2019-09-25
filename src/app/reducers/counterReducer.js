import TYPES from '../actions/actionTypes';

const initialState = {
  count: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.INCREMENT:
      return { ...state, count: ++state.count };
    case TYPES.DECREMENT:
        return { ...state, count: --state.count };
    default:
      return state
  }
}