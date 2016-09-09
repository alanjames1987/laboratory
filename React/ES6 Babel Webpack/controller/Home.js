import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class ControllerHome extends React.Component {

	constructor() {

		super();

		this.state = {};

		this.state.time = new Date().getTime();

	}

	render() {
		return <div>
			<br />
			{this.state.time}
			<br />
			<br />
			<RaisedButton label="Something" />
		</div>
	}

	componentDidMount() {

		this.timer = setInterval(() => {
			this.setState({
				'time': new Date().getTime()
			});
		}, 1000);

	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

}

export default ControllerHome;