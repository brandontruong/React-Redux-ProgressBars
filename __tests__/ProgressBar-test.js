import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import ProgressBar from '../src/components/ProgressBar';

describe('ProgressBar test', function() {
	const minProps = {
		value: 110,
		limit: 100
	};
	it('ProgressBar check if the value is greater than the limit the the bar should have overlimit class', () => {
		const progressBar = shallow (<ProgressBar {...minProps} />);
		expect(progressBar.hasClass('overlimit')).toEqual(true);
	});
	it('should mount in a full DOM', function() {
		expect(mount(<ProgressBar {...minProps}  />).find('.progress-bar').length).toBe(1);
	});
	it('renders without exploding', () => {
		expect(shallow(<ProgressBar {...minProps} />).length).toEqual(1);
	});
	it('ProgressBar check if the value is less than the limit the the bar should not have overlimit class', () => {
		const value = 50;
		const progressBar = shallow(<ProgressBar {...minProps} value={value} />);
		expect(progressBar.hasClass('overlimit')).toEqual(false);
	});
});
