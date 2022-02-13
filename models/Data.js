// hashed passwords data model
const { Model, DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config');
const User = require('./User');
class Data extends Model {
  static associate(models) {
    Data.belongsTo(models.User, {
      foreignKey: "userId",
      sourceKey: "id",
    });
  }
}
Data.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  modelName: 'data',
}, );

module.exports = Data;
