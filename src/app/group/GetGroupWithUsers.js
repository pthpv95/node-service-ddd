class GetGroupWithUsers {
  constructor({ groupsRepository }) {
    this.groupsRepository = groupsRepository
  }

  async execute(id) {
    try {
      const groups = await this.groupsRepository.getGroupIncludingUsers(id)
      return groups
    } catch (error) {
      console.log("create group error", error)
    }
  }
}

module.exports = GetGroupWithUsers
