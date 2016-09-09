import $ from 'jquery';
import Sammy from 'sammy';
import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close'

import ControllerHome from './controller/Home';
import ControllerOther from './controller/Other';
import Controller404 from './controller/404';

injectTapEventPlugin();

var router = new Sammy('body');

var app = document.getElementById('app');
var content = document.getElementById('content');

ReactDOM.render(<MuiThemeProvider>
	<AppBar
	    title="Title"
	    iconElementRight={
			<IconMenu
				iconButtonElement={
					<IconButton><MoreVertIcon /></IconButton>
				}
				targetOrigin={{horizontal: 'right', vertical: 'top'}}
				anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
				<MenuItem primaryText="Home" />
				<MenuItem primaryText="Other" />
			</IconMenu>
		}
	/>
</MuiThemeProvider>, app);

router.get('/#/', function(){
	ReactDOM.render(<MuiThemeProvider><ControllerHome /></MuiThemeProvider>, content);
});

router.get('/#other', function(){
	ReactDOM.render(<MuiThemeProvider><ControllerOther /></MuiThemeProvider>, content);
});

router.run('#/');