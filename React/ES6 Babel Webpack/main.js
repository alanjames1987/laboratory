import React from 'react';
import {
	ReactDOM,
	render
} from 'react-dom';
import {
	Router,
	Route,
	Link,
	browserHistory
} from 'react-router';

import App from './App';

ReactDOM.render( <App something="test" /> , document.getElementById('app'));

render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<Route path="about" component={About} />
			<Route path="users" component={Users}>
				<Route path="/user/:userId" component={User} />
			</Route>
			<Route path="*" component={NoMatch} />
		</Route>
	</Router>
), document.getElementById('root'))