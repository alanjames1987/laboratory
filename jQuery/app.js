(function($) {

	$('body').on('click.button', 'button', function() {
		console.log(this);
		$('#box').animate({
			'left': "+=50",
		}, 2000, function(){
			$('#box').animate({
				'width': "100px",
				'height': "100px"
			}, 2000, function(){
				alert('DONE');
			});
		});
	});

	$('#button2').on('click.r', function() {
		$('#button1').off('click');
		console.log('click2');
	});

})(jQuery);