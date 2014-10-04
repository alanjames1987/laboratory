var brain = require('brain');
NeuralNetwork = brain.NeuralNetwork;

var net = new NeuralNetwork();

net.train([{
	input: [0, 0],
	output: [0]
}, {
	input: [0, 1],
	output: [1]
}, {
	input: [1, 0],
	output: [1]
}, {
	input: [1, 1],
	output: [0]
}]);

var output = net.run([1, 0]);

console.log(output);