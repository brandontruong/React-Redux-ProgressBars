import React, { PropTypes } from 'react';

class NumericToggle extends React.Component {
	render () {
		return (
			<div className="buttons">
				{this.props.values.map((value, index) =>
					<button key={index} value={value} onClick={this.props.onClick}>
						{value}
					</button>
				)}
			</div>
		);
	}
}

NumericToggle.propTypes = {
	values: PropTypes.array.isRequired
};

export default NumericToggle;
