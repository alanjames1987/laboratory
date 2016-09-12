// Initialize app
var app = new Framework7();

var $$ = Dom7;

// Add view
var mainView = app.addView('.view-main', {
	// Because we want to use dynamic navbar, we need to enable it for this view:
	dynamicNavbar: true
});

app.onPageInit('test', function(page) {
	console.log('test');
});