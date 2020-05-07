"use strict";
module.exports = (sequelize, DataTypes) => {
	const user2 = sequelize.define(
		"user2",
		{
			user_id: {
				type: DataTypes.STRING,
				unique: true,
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING,
				allowNUll: false,
			},
		},
		{}
	);
	user2.associate = function (models) {
		// associations can be defined here
	};
	return user2;
};
