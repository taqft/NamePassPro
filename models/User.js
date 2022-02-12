const { Model, DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config');
class User extends Model {}
User.init({
	id: {
		type: DataTypes.UUID,
		defaultValue: UUIDV4,
		primaryKey: true,
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
		validate: {
			isEmail: true,
		}
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			len: [6]
		}
	},
	master: {
		type: DataTypes.STRING,
		allowNull: false,
	}
}, {
	sequelize,
	timestamps: false,
	freezeTableName: true,
	modelName: 'user',
}, );
module.exports = User;