// dataRoutes
const router = require('express').Router();
const {
  createData,
  getDataByUserId,
  //deleteDataByUserId,
} = require('../../../controllers/dataController');

router.route('/')
  .post(createData);

router.route('/:userId')
  .get(getDataByUserId);
// /api/users/:userId

// router.route('/:userId')
// 	.delete(deleteUserById)
// 	.get(getUserById)
// 	.put(updateUserById)
module.exports = router;
