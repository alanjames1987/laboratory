var output = document.getElementById('output');
var input = document.getElementById('input');
var button = document.getElementById('send');

var primus = new Primus();

primus.on('severEvent', function received(data) {
	output.value += data + '\n';
});

button.addEventListener('click', function submit(e) {
	console.log('click');
	primus.write('clientEvent', {});
});