var brain = require('brain');
NeuralNetwork = brain.NeuralNetwork;

var network = new NeuralNetwork();

var train = network.train([{
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

var output = network.run([1, 0]);

console.log(network.toJSON());