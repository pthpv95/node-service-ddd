class GetGroupContent {
  constructor({ groupsRepository }) {
    this.groupsRepository = groupsRepository
  }

  async execute(id) {
    try {
      const group = await this.groupsRepository.getGroupContent(id)
      return group
    } catch (error) {
      console.log("create group error", error)
    }
  }
}

module.exports = GetGroupContent
