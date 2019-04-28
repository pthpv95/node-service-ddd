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
        associate(models) {
          user.hasMany(models.Messages)
          user.belongsToMany(models.Groups, {
            through: "group_users",
            as: 'groups',
            foreignKey: 'userId'
          })
        }
      }
    }
  )

  return user
}
