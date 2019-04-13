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
      }
    },
    {
      classMethods: {
        associate(models) {
          // message.belongsTo(models.user)
        }
      }
    }
  )

  return message
}
