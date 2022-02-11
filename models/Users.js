// user model
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
		validate: {
			len: [12, 64]
		}
	},
	data: {
		type: DataTypes.ARRAY,
		allowNull: false,
	}
}, {
	sequelize,
	timestamps: false,
	freezeTableName: true,
	modelName: 'user',
}, );