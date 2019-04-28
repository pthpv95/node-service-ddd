class GetGroup {
  constructor({ groupsRepository }) {
    this.groupsRepository = groupsRepository
  }

  async execute(id) {
    try {
      const group = await this.groupsRepository.get(id)
      return group
    } catch (error) {
      console.log("create group error", error)
    }
  }
}

module.exports = GetGroup
