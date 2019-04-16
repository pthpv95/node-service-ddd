"use strict"
module.exports = function(sequelize, DataTypes) {
  const Group = sequelize.define(
    "groups",
    {
      id: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      name: {
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
        associate() {}
      }
    }
  )

  return Group
}
