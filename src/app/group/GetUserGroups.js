class GetUserGroups {
  constructor({ groupsRepository }) {
    this.groupsRepository = groupsRepository
  }

  async execute(userId) {
    try {
      const groups = await this.groupsRepository.getGroupsByUser(userId)
      return groups
    } catch (error) {
      console.log("create group error", error)
    }
  }
}

module.exports = GetUserGroups
