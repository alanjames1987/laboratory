var locomotive = require('locomotive');

var Controller = locomotive.Controller;

var controller = new Controller();

controller.main = function() {
	this.title = 'Something v1';
	this.res.json({});
};

module.exports = controller;