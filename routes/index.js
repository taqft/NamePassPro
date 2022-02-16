// all routes
const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const { renderHomePage, signinView, signupView } = require('../controllers/userController');
const { getAllData } = require('../controllers/dataController');

router.get('/', renderHomePage);
router.get('/saved', getAllData);
router.get('/signin', signinView);
router.get('/signup', signupView);
router.use('/api', apiRoutes);

module.exports = router;
