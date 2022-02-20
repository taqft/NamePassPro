// userRoutes
const router = require('express').Router();
const {
  getWords,
} = require('../../../controllers/wordController');

router.route('/')
  .get(getWords)

module.exports = router;
