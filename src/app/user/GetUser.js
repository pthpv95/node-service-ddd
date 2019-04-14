class GetUser {
  constructor({ userRepository }) {
    this.userRepository = userRepository
  }

  async execute(id) {
    try {
      const user = await this.userRepository.getById({
        where: {
          id
        }
      })
      return user
    } catch (error) {
      throw error
    }
  }
}

module.exports = GetUser
