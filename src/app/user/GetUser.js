class GetUser {
  constructor({ userRepository }) {
    this.userRepository = userRepository
  }

  async execute(id) {
    try {
      const user = await this.userRepository.getById({
        attributes: ["id", "name"],
        where: {
          id
        }
      })

      return user
    } catch (error) {
      console.log("error", error)
      throw error
    }
  }
}

module.exports = GetUser
