import * as types from '../actions/action-types';

export default (state = {
	buttons: [17,41,-40,-6],
	bars: [15,50,79,13],
	limit: 100,
	selectedBar: 0
}, action) => {
  switch (action.type) {
    case types.BAR_CHANGED:
			return { ...state, selectedBar: action.selectedBar };
		case types.BUTTON_CLICKED:
			var barValue = state.bars[state.selectedBar] + action.value;
			if (barValue < 0) { barValue = 0 };
			var newBars = state.bars.slice();
			newBars[state.selectedBar] = barValue;
			return { ...state, bars: newBars };
		case types.FETCH_DATA_FULFILLED:
			return { ...state, bars: action.data.bars, buttons: action.data.buttons };
		case types.FETCH_DATA_REJECTED:
			return state;
    default:
			return state;
  }
};
