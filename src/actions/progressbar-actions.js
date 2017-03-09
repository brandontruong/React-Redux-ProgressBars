import * as types from './action-types';
import axios from 'axios';

export const fetchData = () => {
	return function(dispatch) {
		axios.get('http://frontend-exercise.apps.staging.digital.gov.au/bars')
			.then((response) => {
				dispatch({type: types.FETCH_DATA_FULFILLED, data: response.data})
			})
			.catch((err) => {
				dispatch({type: types.FETCH_DATA_REJECTED, data: err})
			})
	}
}

export const buttonClicked = (value) => {
  return {
    type: types.BUTTON_CLICKED,
    value
  };
}

export const barChanged = (selectedBar) => {
	return {
		type: types.BAR_CHANGED,
		selectedBar
	};
}