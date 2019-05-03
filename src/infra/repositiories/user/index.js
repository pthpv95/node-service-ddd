const UserMapper = require("./mapper")

class SequelizeUsersRepository {
  constructor({ UserModel, GroupModel, GroupUserModel }) {
    this.userModel = UserModel
    this.groupModel = GroupModel
    this.groupUserModel = GroupUserModel
  }

  async getAll(...args) {
    const users = await this.userModel.findAll(...args)
    return users.map(UserMapper.toEntity)
  }

  async getById(id) {
    const user = await this.userModel.findOne({
      attributes: ["id", "name"],
      where: {
        id
      }
    })
    if (!user) {
      throw new Error("USER_NOT_FOUND")
    } else {
      return UserMapper.toEntity(user)
    }
  }

  async createUser(...args) {
    // TODO: Do some validations
    return await this.userModel.create(...args)
  }

  async joinGroup(userId, groupId) {
    const user = await this.getById(userId)
    if (user.id) {
      // add new record to group_user table
      await this.groupUserModel.create({
        groupId,
        userId
      })
      return groupId
    } else {
      throw new Error("User not found")
    }
  }
}

module.exports = SequelizeUsersRepository
