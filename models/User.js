const { Model, DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config');
class User extends Model {
	static associate(models) {
		User.hasMany(models.Data, {
			foreignKey: {
				name: "userId",
				allowNull: false
			},
			as: "data",
			targetKey: "id",
		});
	}
}
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
	master: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			len: [6]
		}
	}
}, {
	sequelize,
	timestamps: false,
	freezeTableName: true,
	modelName: 'user',
}, );

module.exports = User;
