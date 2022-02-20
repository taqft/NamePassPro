// TODO: Word routes logic
const {
  Word
} = require('../models');
const {
  Op
} = require("sequelize");
module.exports = {
  getWords: async (req, res) => {
    const {
      length,
      is_verb,
      is_noun,
    } = req.query;
    if (!length || !is_verb || !is_noun) {
      return res.status(400).json({
        error: 'You must provide a length, and choice for both verbs and nouns.'
      });
    }
    try {
      const possibleWords = await Word.findAll({
        where: {
          length: {
            [Op.lte]: length / 2,
          },
          is_verb,
          is_noun,
        }
      });
      let words = [];
      let loopSize = 2;
      for (let i = 0; i < loopSize; i++) {
        let randIndex = Math.floor(Math.random() * (possibleWords.length - 1));
        let newWord = possibleWords[randIndex].word;
        words.push(newWord);
      }
      res.json(words);
    } catch (e) {
      res.json(e);
    }
  }
}
