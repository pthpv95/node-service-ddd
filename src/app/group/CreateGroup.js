class CreateGroup {
  constructor({ groupsRepository }){
    this.groupsRepository = groupsRepository
  }

  async execute({ name, userId }){
    try {
      const newGroup = await this.groupsRepository.create(userId, name)
      return newGroup.id
      
    } catch (error) {
      console.log('create group error', error)
    }
  }
}

module.exports = CreateGroup