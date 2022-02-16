const {
	User
} = require('../models');
module.exports = {
	createUser: async (req, res) => {
		const { username, email, password, master } = req.body;
		if (!username || !email || !password || !master) {
			return res.status(400).json({
				error: 'You must provide a username, email, password, and master password'
			});
		}
		try {
			const user = await User.create({
				username,
				email,
				password,
				master,
			});
			res.json(user);
		} catch (e) {
			res.json(e);
		}
	},
	//	getting users
	getAllUsers: async (req, res) => {
		try {
			const usersData = await User.findAll({});

			const users = usersData.map(user => user.get({
				plain: true
			}));

			console.log(users);
			res.json(users);
		} catch (e) {
			res.json(e);
		}
	},
	renderHomePage: async (req, res) => {
		console.log('rendering homepage...')
		res.render('homepage');
	},
	getUserById: async (req, res) => {
		req.session.save(() => {
			if (req.session.visitCount) {
				req.session.visitCount++;
			} else {
				req.session.visitCount = 1;
			}
		});
		try {
			const userData = await User.findByPk(req.params.userId);
			const user = userData.get({
				plain: true
			});
			res.render('singleUser', {
				user,
				visitCount: req.session.visitCount,
			});
		} catch (e) {
			res.json(e);
		}
	},
	login: async (req, res) => {
		console.log(req.body);
		try {
			//	first find the user with the given email address
			const userData = await User.findOne({
				email: req.body.email
			});
			const userFound = userData.get({
				plain: true
			});

			console.log(userFound);
			//	check if the password from the form is the same password as the user found
			//	with the given email
			//	if that is true, save the user found in req.session.user
			console.log(userFound.password, 79);
			console.log(req.body.password, 80);
			if (userFound.password === req.body.password) {
				console.log('im hit', 82);
				req.session.save(() => {
					req.session.user = userFound;
					res.json({
						success: true
					});
				});
			}
		} catch (e) {
			console.log(e);
			res.json(e);
		}
	},

	signupHandler: async (req, res) => {
		const {
			email,
			username,
			password
		} = req.body;

		try {
			const createdUser = await User.create({
				email,
				username,
				password,
			});
			const user = createdUser.get({
				plain: true
			});

			req.session.save(() => {
				req.session.loggedIn = true;
				req.session.user = user;
				res.redirect('/todos');
			});
		} catch (e) {
			res.json(e);
		}
	},

	loginView: (req, res) => {
		if (req.session.loggedIn) {
			return res.redirect('/todos');
		}
		res.render('login');
	},
	signupView: (req, res) => {
		if (req.session.loggedIn) {
			return res.redirect('/todos');
		}
		res.render('signUp');
	},
	logout: (req, res) => {
		req.session.destroy(() => {
			res.send({
				status: true
			});
		})
	},
}
// /signup
// Create a function in the controller that checks if a user is already logged in
// if so, redirect them to /todos
// if not, render the signup page
// this should be rendered on /signup endpoint
