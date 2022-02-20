// apiRoutes
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const dataRoutes = require('./dataRoutes');
const wordRoutes = require('./wordRoutes');
router.use('/users', userRoutes);
router.use('/data', dataRoutes);
router.use('/word', wordRoutes);
module.exports = router;
