var App = Ember.Application.create({
	'LOG_TRANSITIONS' : true
});

/** Configure */

App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Router.map(function() {

	this.route('about', {
		path : '/about'
	});

	this.resource('products', function() {
		this.resource('product', {
			path : '/:id'
		});
	});

});

/** Model */

App.Post = DS.Model.extend({
	'title' : DS.attr('string'),
	'description' : DS.attr('string'),
	'image' : DS.attr('string')
});

App.Product = DS.Model.extend({
	'title' : DS.attr('string'),
	'price' : DS.attr('number'),
	'description' : DS.attr('string'),
	'isOnSale' : DS.attr('boolean'),
	'image' : DS.attr('string'),
	'reviews' : DS.hasMany('review', {
		'async' : true
	})
});

App.Review = DS.Model.extend({
	'title' : DS.attr('string'),
	'description' : DS.attr('string'),
});

/** Data */

App.Post.FIXTURES = [{
	'id' : 1,
	'title' : 'Emma Watson',
	'description' : 'is sexy...',
	'image' : 'http://tuiing.com/wp-content/uploads/2014/01/Emma-Watson-Actress17.jpg'
}, {
	'id' : 2,
	'title' : 'Emma Watson',
	'description' : 'is still sexy...',
	'image' : 'http://imworld.aufeminin.com/story/20130626/emma-watson-44467_w1000.jpg'
}];

App.Product.FIXTURES = [{
	'id' : 1,
	'title' : 'Whatever',
	'price' : 0,
	'description' : 'Some description',
	'isOnSale' : true,
	'image' : ''
}, {
	'id' : 2,
	'title' : 'iPhone',
	'price' : 0,
	'description' : 'bad',
	'isOnSale' : true,
	'image' : ''
}, {
	'id' : 3,
	'title' : 'Android',
	'price' : 0,
	'description' : 'good',
	'isOnSale' : true,
	'image' : ''
}];

App.Review.FIXTURES = [{
	'id' : 1,
	'title' : 'Whatever',
	'description' : 'Some description'
}, {
	'id' : 2,
	'title' : 'iPhone',
	'description' : 'bad'
}];

/** Routes */

App.IndexRoute = Ember.Route.extend({
	'model' : function() {
		return this.store.findAll('post');
	}
});

App.ProductsRoute = Ember.Route.extend({
	'model' : function() {
		return this.store.findAll('product');
	}
});

App.ProductRoute = Ember.Route.extend({
	'model' : function(params) {
		return this.store.find('product', params.id);
	}
});

/** Controllers */

// App.IndexController = Ember.Controller.extend({
// 'title' : 'Emma Watson',
// 'description' : 'is sexy...',
// 'image' : 'http://tuiing.com/wp-content/uploads/2014/01/Emma-Watson-Actress17.jpg',
// 'date' : function() {
// return (new Date()).toDateString();
// }.property()
// });

App.AboutController = Ember.Controller.extend({
	'about' : 'This is my about page.'
});
