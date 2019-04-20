class GroupRepository {
  constructor({ GroupModel, GroupUserModel }) {
    this.groupModel = GroupModel
    this.groupUserModel = GroupUserModel
  }

  async create(userId, name) {
    const group = await this.groupModel.create({
      name
    })

    await this.groupUserModel.create({
      userId,
      groupId: group.id
    })

    return group.id
  }

  async getRoom(id){
  }
}

module.exports = GroupRepository
