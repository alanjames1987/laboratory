(function() {

	var input = document.getElementById('input');
	var output = document.getElementById('output');

	input.addEventListener('keyup', function() {
		output.innerHTML = marked(input.value);
	});

})();