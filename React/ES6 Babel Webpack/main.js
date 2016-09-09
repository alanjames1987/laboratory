import $ from 'jquery';
import Sammy from 'sammy';
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

var app = new Sammy('body');

app.get('/#/', function(){
	render(<ControllerHome /> , document.getElementById('app'));
});

app.get('/#other', function(){
	render(<ControllerOther /> , document.getElementById('app'));
});

app.run('#/');