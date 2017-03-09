import React from 'react';
import { connect } from 'react-redux';
import { shallowWithStore } from 'enzyme-redux';
import { createMockStore } from 'redux-test-utils';
import {mount, shallow} from 'enzyme';
import {expect} from 'chai';
import ProgressBarContainer from '../src/components/ProgressBarContainer';
 
describe('shallowWithStore', () => {
	const minProps = {
		loaded: false,
		bars: [],
		buttons: [],
		limit: 100,
		selectedBar: 0
	};
	describe('state', () => {
		it('works', () => {
			const mapStateToProps = (state) => ({
				state,
			});
			const ConnectedComponent = connect(mapStateToProps)(ProgressBarContainer);
			const component = shallowWithStore(<ConnectedComponent />, createMockStore(minProps));
			expect(component.props().state).to.equal(minProps);
		});
	});
	describe('dispatch', () => {
		it('works', () => {
		  const action = {
			type: 'type',
		  };
		  const mapDispatchToProps = (dispatch) => ({
			dispatchProp() {
			  dispatch(action);
			},
		  });
		  const store = createMockStore();

		  const ConnectedComponent = connect(undefined, mapDispatchToProps)(ProgressBarContainer);
		  const component = shallowWithStore(<ConnectedComponent />, store);
		  component.props().dispatchProp();
		  expect(store.isActionDispatched(action)).to.equal(true);
		});
	});
});
