const SequelizeGroupMapper = require("./mapper")

class GroupRepository {
  constructor({ GroupModel, GroupUserModel, UserModel, MessageModel }) {
    this.groupModel = GroupModel
    this.groupUserModel = GroupUserModel
    this.userModel = UserModel
    this.messageModel = MessageModel
  }

  async create(userId, name) {
    const group = await this.groupModel.create({
      name
    })

    await this.groupUserModel.create({
      userId,
      groupId: group.id
    })

    return group
  }

  async getGroupContent(id) {
    const messages = await this.messageModel.findAll({
      attributes: ["id", "text", "createdAt"],
      order: [["createdAt", "ASC"]],
      where: {
        groupId: id
      },
      include: [{ model: this.userModel, attributes: ["id", "name"] }]
    })
    return messages.map(SequelizeGroupMapper.toEntity)
  }

  async getGroupsByUser(userId) {
    const groups = await this.userModel.findAll({
      attributes: ["id", "name"],
      where: {
        id: userId
      },
      include: [
        {
          model: this.groupModel,
          as: "groups",
          attributes: ["id", "name"],
          through: { attributes: [] }
        }
      ]
    })
    return groups.map(SequelizeGroupMapper.toEntity)
  }

  async getGroupIncludingUsers(id) {
    const groups = await this.groupModel.findAll({
      attributes: ["id", "name"],
      where: { id },
      include: [
        {
          model: this.userModel,
          as: "users",
          attributes: ["id", "name"],
          through: { attributes: [] }
        }
      ]
    })

    return groups.map(SequelizeGroupMapper.toEntity)
  }

  async getAll() {
    const groups = await this.groupModel.findAll({ attributes: ["id", "name"] })
    return groups.map(SequelizeGroupMapper.toEntity)
  }
}

module.exports = GroupRepository
