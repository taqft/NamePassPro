// apiRoutes
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const dataRoutes = require('./dataRoutes');
// const todoRoutes = require('./todoRoutes');
router.use('/users', userRoutes);
router.use('/data', dataRoutes);
// router.use('/todos', todoRoutes);
module.exports = router;
