class GetAllGroups {
  constructor({ groupsRepository }) {
    this.groupsRepository = groupsRepository
  }

  async execute() {
    try {
      const groups = await this.groupsRepository.getAll()
      return groups
    } catch (error) {
      console.log("create group error", error)
    }
  }
}

module.exports = GetAllGroups
