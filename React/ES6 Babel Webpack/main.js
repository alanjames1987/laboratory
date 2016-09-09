import $ from 'jquery';
import Sammy from 'sammy';
import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import ControllerHome from './controller/Home';
import ControllerOther from './controller/Other';
import Controller404 from './controller/404';

injectTapEventPlugin();

var app = new Sammy('body');
var content = document.getElementById('app');

app.get('/#/', function(){
	ReactDOM.render(<MuiThemeProvider><ControllerHome /></MuiThemeProvider>, content);
});

app.get('/#other', function(){
	ReactDOM.render(<MuiThemeProvider><ControllerOther /></MuiThemeProvider>, content);
});

app.run('#/');