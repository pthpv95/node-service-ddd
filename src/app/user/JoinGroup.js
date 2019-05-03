class JoinGroup {
	constructor({ groupsRepository, userRepository }) {
		this.groupsRepository = groupsRepository
		this.userRepository = userRepository
	}

	async execute({ userId, groupId }) {
		try {
			// cosnt group = await this.groupsRepository.get
			// Check group existing or not
			const result = await this.userRepository.joinGroup(userId, groupId)
			return result
		} catch (error) {
			console.log("JoinGroup error", error)
			throw error
		}
	}
}

module.exports = JoinGroup
