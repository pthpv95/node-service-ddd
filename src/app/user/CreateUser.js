const { hashPassword } = require("../../infra/encryption/password")

class CreateUser {
	constructor({ userRepository }) {
		this.userRepository = userRepository
	}

	async execute(payload) {
		try {
			const hashedPassword = hashPassword(payload.password)
			const newUser = await this.userRepository.createUser({
				...payload,
				password: hashedPassword
			})
			return newUser.id
		} catch (error) {
			console.log("CreateUser", error)
		}
	}
}

module.exports = CreateUser
