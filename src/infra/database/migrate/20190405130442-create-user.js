"use strict"
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable(
      "users",
      {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.STRING
        },
        name: {
          type: Sequelize.STRING
        },
        password: {
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
  down: function(queryInterface) {
    return queryInterface.dropTable("users")
  }
}
