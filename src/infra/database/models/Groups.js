"use strict"
module.exports = function(sequelize, DataTypes) {
  const group = sequelize.define(
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
        associate: (models) => {
          group.hasMany(models.Messages)
          group.belongsToMany(models.User, {
            through: "group_users",
            foreignKey: 'groupId',
            as: 'users'
          })
        }
      }
    }
  )

  return group
}
