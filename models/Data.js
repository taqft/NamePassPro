// hashed passwords data model
const {
  Model,
  DataTypes,
  UUIDV4
} = require('sequelize');
const sequelize = require('../config');
class Data extends Model {}
Data.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [6]
    }
  },
}, {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  modelName: 'data',
}, );
