var locomotive = require('locomotive');

var Controller = locomotive.Controller;

var controller = new Controller();

controller.main = function() {
	this.title = 'Something';
	this.render();
};

module.exports = controller;