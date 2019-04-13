const UserMapper = require("./mapper")

class SequelizeUsersRepository {
  constructor({ UserModel }) {
    this.UserModel = UserModel
  }

  async getAll(...args) {
    const users = await this.UserModel.findAll(...args);

    return users.map(UserMapper.toEntity);
  }
}

module.exports = SequelizeUsersRepository
