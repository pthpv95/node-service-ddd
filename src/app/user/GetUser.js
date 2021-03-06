class GetUser {
  constructor({ userRepository }) {
    this.userRepository = userRepository
  }

  async execute(id) {
    try {
      const user = await this.userRepository.getById(id)

      return user
    } catch (error) {
      console.log("error", error)
      throw error
    }
  }
}

module.exports = GetUser
