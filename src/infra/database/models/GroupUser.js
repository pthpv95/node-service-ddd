"use strict"
module.exports = function(sequelize, DataTypes) {
  const groupUser = sequelize.define(
    "group_users",
    {
      id: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      userId: DataTypes.STRING,
      groupId: DataTypes.STRING
    },
    {
      classMethods: {
        associate(models) {}
      }
    }
  )

  return groupUser
}
