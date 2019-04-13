class GetAllUsers {
  constructor({ userRepository }) {
    this.userRepository = userRepository
  }

  async execute() {
    try {
      const users = await this.userRepository.getAll({
        attributes: ['id', 'name']
      })
      return users
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = GetAllUsers
