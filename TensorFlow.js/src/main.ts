import * as tf from '@tensorflow/tfjs';

import '@tensorflow/tfjs-node';

import * as dataTrain from './iris.json';
import * as dataTest from './iris-testing.json';

const x_train = tf.tensor2d(dataTrain.map(item => {

	return [
		item.sepal_length,
		item.sepal_width,
		item.petal_length,
		item.petal_width,
	];

}));

const y_train = tf.tensor2d(dataTrain.map(item => {

	return [
		item.species === 'setosa' ? 1 : 0,
		item.species === 'virginica' ? 1 : 0,
		item.species === 'versicolor' ? 1 : 0,
	];

}));

const x_test = tf.tensor2d(dataTest.map(item => {

	return [
		item.sepal_length,
		item.sepal_width,
		item.petal_length,
		item.petal_width,
	];

}));

const model = tf.sequential();

model.add(tf.layers.dense({
	inputShape: [4],
	activation: 'sigmoid',
	units: 5,
}));

model.add(tf.layers.dense({
	inputShape: [5],
	activation: 'sigmoid',
	units: 3,
}));

model.add(tf.layers.dense({
	activation: 'sigmoid',
	units: 3,
}));

model.compile({
	loss: 'meanSquaredError',
	optimizer: tf.train.adam(.06),
});

model
	.fit(x_train, y_train, { epochs: 100, })
	.then((history) => {
		let predict = model.predict(x_test) as tf.Tensor;
		predict.print();
	});

