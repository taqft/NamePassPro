// TODO: Word routes logic
const {
  Word
} = require('../models');
module.exports = {
  getWords: async (req, res) => {
    const {
      username,
      email,
      password,
      master
    } = req.body;
    if (!username || !email || !password || !master) {
      return res.status(400).json({
        error: 'You must provide a username, email, password, and master password'
      });
    }
    try {
      const user = await Word.create({
        username,
        email,
        password,
        master,
      });
      res.json(user);
    } catch (e) {
      res.json(e);
    }
  }
}
