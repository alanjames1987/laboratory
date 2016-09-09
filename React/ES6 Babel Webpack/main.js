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

import ControllerHome from './controller/Home';
import ControllerOther from './controller/Other';
import Controller404 from './controller/404';

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})

const About = React.createClass({
  render() {
    return <h3>About</h3>
  }
})

render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<Route path="other" component={About} />
			<Route path="*" component={Controller404} />
		</Route>
	</Router>
), document.getElementById('app'))