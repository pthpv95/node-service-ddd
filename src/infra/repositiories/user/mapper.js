const { User } = require("../../../domain/user")

const SequelizeUserMapper = {
  toEntity({ dataValues }) {
    const { id, name } = dataValues
    return new User({ id, name })
  },

  toDatabase(survivor) {
    const { name } = survivor

    return { name }
  }
}

module.exports = SequelizeUserMapper
