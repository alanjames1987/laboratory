class Thing extends React.Component {

	render() {
		return <div>{this.props.something}</div>
	}

}

ReactDOM.render(<Thing something="test" />, document.getElementById('app'))