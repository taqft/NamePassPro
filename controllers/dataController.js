const {
  Data
} = require('../models');

module.exports = {
  // create a new namepass entry in the namepass_db
  // with association to the currently logged-in user
  // so that it can be retrieved later via getDataByUserId
  createData: async (req, res) => {
    const {
      userId,
      username,
      password
    } = req.body;
    if (!userId || !username || !password) {
      return res.status(400).json({
        error: 'You must provide the userId, username, and password for a new data entry'
      });
    }
    try {
      const data = await Data.create({
        userId,
        username,
        password
      });
      res.json(data);
    } catch (e) {
      res.json(e);
    }
  },
  getDataByUserId: async (req, res) => {
    req.session.save(() => {
      if (req.session.visitCount) {
        req.session.visitCount++;
      } else {
        req.session.visitCount = 1;
      }
    });
    try {
      const usersData = await Data.findAll({
        where: {
          userId: req.params.userId
        }
      });

      const data = usersData.map(user => user.get({
        plain: true
      }));

      console.log(data);
      res.json(data);
    } catch (e) {
      res.json(e);
    }
  },
}