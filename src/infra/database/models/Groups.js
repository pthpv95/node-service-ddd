"use strict"
// const User = require('./User')

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
      name: { type: DataTypes.STRING }
    },
    {
      classMethods: {
        associate() {
          // associations can be defined here
        //   Group.hasMany(User)
        }
      }
    }
  )


  return Group
}
