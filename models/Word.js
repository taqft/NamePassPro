// words for use in generating names
const { Model, DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config');
class Word extends Model {};
Word.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  word: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  is_verb: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  is_noun: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
}, {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  modelName: 'word',
}, );

module.exports = Word;
