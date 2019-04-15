"use strict"

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable(
			"messages",
			{
				id: {
					allowNull: false,
					primaryKey: true,
					type: Sequelize.STRING
				},
				userId: {
					type: Sequelize.STRING,
					references: {
						model: "users",
						key: "id"
					}
				},
				text: {
					allowNull: false,
					type: Sequelize.STRING
				},
				createdAt: {
          allowNull: false,
					type: Sequelize.DATE
				},
				updatedAt: {
					allowNull: true,
					type: Sequelize.DATE
				}
			}
		)
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable("messages")
	}
}
