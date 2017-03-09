import React, { PropTypes }  from 'react';
import classnames from 'classnames';

class ProgressBar extends React.Component {
	render () {
		const { limit, value } = this.props;
		const styles = {
			width: (value * 100) / limit + '%'
		};

		return (
			<div className={classnames("progress-bar", ((limit < value) && 'overlimit'))} value={value}>
				<span>{value}</span>
				<div className="progressing" style={styles}></div>
			</div>
		);
	}
}

ProgressBar.propTypes = {
	value: PropTypes.number.isRequired,
	limit: PropTypes.number.isRequired
};

export default ProgressBar;
