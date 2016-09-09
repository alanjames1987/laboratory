import React from 'react';

class ControllerHome extends React.Component {

	constructor() {

		super();

		this.state = {};

		this.state.time = new Date().getTime();

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

	render() {
		return <div > {
			this.state.time
		} < /div>
	}

}

export default ControllerHome;