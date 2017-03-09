import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import NumericToggle from '../src/components/NumericToggle';

describe('NumericToggle', () => {
	const minProps = {
		values: [1,2,3]
	};
	it('should mount in a full DOM', function() {
		expect(mount(<NumericToggle {...minProps}  />).find('.buttons').length).toBe(1);
	});
	it('renders without exploding', () => {
		expect(shallow(<NumericToggle {...minProps} />).length).toEqual(1);
	});
	it('check if the buttons are set up correctly with the data provided', () => {
		const buttons = [43,19,-11,-24];

		const numericToggle = shallow(
		  <NumericToggle values={buttons} />
		);

		expect(numericToggle.text()).toEqual('4319-11-24');
		expect(numericToggle.find('button').length).toEqual(4);
	});
	it('simulates click events', () => {
		const buttons = [43,19,-11,-24];
		const onClick = sinon.spy();
		const numericToggle = shallow(
		  <NumericToggle onClick={onClick} values={buttons} />
		);

		numericToggle.find('button').nodes[0].props.onClick();
		expect(numericToggle.find('button').length).toEqual(4);
		expect(onClick.calledOnce).toEqual(true);
	});
})