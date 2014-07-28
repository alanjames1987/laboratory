var SomethingController = function() {

	this.whatever = [{
		name: 'Alan James'
	}, {
		name: 'Alan James 2'
	}, {
		name: 'Alan James 3'
	}, {
		name: 'Alan James 4'
	}, {
		name: 'Alan James 5'
	}];

	this.changeIt = function() {
		this.whatever.push({
			name: 'Something'
		});
	};

	this.readIt = function() {
		console.log(this.whatever);
	};

};