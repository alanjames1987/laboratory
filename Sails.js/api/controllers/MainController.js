var hasher = require('password-hash');

var MainController = {

	index : function(req, res) {
		res.view();
	},

	chat : function(req, res) {

		if (!req.session || !req.session.user) {
			res.redirect('/');
			return;
		}

		res.view({
			'username' : req.session.user.username
		});

	},

	signup : function(req, res) {

		var username = req.param('username');
		var password = req.param('password');

		Users.findOneByUsername(username).done(function(err, usr) {

			if (err) {
				res.send({
					'error' : 'DB Error'
				});
			}

			if (usr) {
				res.send({
					'error' : 'Username already Taken'
				});
			}

			var hasher = require('password-hash');
			password = hasher.generate(password);

			Users.create({
				username : username,
				password : password
			}).done(function(err, user) {

				if (err) {
					res.send({
						'error' : 'DB Error'
					});
					return;
				}

				if (!usr) {
					res.send({
						'error' : 'User not Found'
					});
					return;
				}

				req.session.user = user;
				res.send(user);

			});

		});

	},

	signin : function(req, res) {

		var username = req.param('username');
		var password = req.param('password');

		Users.findOneByUsername(username).done(function(err, results) {

			var user = results;

			if (err) {
				res.send({
					'error' : 'DB Error'
				});
				return;
			}

			if (!user) {
				res.send({
					'error' : 'User not Found'
				});
				return;
			}

			if (!hasher.verify(password, user.password)) {
				res.send({
					'error' : 'Wrong Password'
				});
				return;
			}

			req.session.user = user;
			res.send(user);

		});

	}
};

module.exports = MainController;
