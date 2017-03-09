import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as progressBarActions from '../actions/progressbar-actions';
import NumericToggle from './NumericToggle.js';
import ProgressBar from './ProgressBar.js';

class ProgressBarContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			bars: [],
			buttons: [],
			limit: 100
		};
	}

	componentWillMount() {
		this.props.actions.fetchData();
	}

	handleBarChange(event) {
		this.props.actions.barChanged(event.target.value);
	}

	handleButtonClicked(event) {
		this.props.actions.buttonClicked(parseInt(event.target.value, 10));
	}

	render() {
		const { buttons, bars, limit } = this.props;

		return (
			<div className="progress-bar-application">
				<h1>Progress Bars Demo</h1>

				<div>
					{bars.map((value, index) =>
						<ProgressBar value={value} key={index} limit={limit} />
					)}
				</div>

				<div>
					<select onChange={this.handleBarChange.bind(this)}>
						{bars.map((item, index) =>
							<option key={index} value={index}>
								#progress{index + 1}
							</option>
						)}
					</select>
					<NumericToggle values={buttons} onClick={this.handleButtonClicked.bind(this)} />
				</div>
			</div>
		);
	}
}

ProgressBarContainer.propTypes = {
	buttons: PropTypes.array.isRequired,
	bars: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
};

function mapStateToProps(state, props) {
	return {
		buttons: state.progressbar.buttons,
		bars: state.progressbar.bars,
		limit: state.progressbar.limit,
	};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(progressBarActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProgressBarContainer);
