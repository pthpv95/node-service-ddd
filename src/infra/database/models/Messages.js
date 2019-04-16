"use strict"

module.exports = function(sequelize, DataTypes) {
  const message = sequelize.define(
    "messages",
    {
      id: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      text: {
        type: DataTypes.STRING
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        type: DataTypes.DATE
      }
    },
    {
      classMethods: {
        associate: models => {
          message.belongsTo(models.User)
        }
      }
    }
  )

  return message
}
