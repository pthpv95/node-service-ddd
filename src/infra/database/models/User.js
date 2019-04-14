"use strict"
module.exports = function(sequelize, DataTypes) {
  const user = sequelize.define(
    "users",
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
      password: {
        type: DataTypes.STRING 
      }
    },
    {
      classMethods: {
        associate(models) {
          user.hasMany(models.Messages)
        }
      }
    }
  )

  return user
}
