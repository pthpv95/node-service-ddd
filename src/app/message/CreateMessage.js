class CreateMessage {
  constructor({ messageRepository }){
    this.messageRepository = messageRepository
  }

  async execute({ text, userId, groupId }){
    try {
      const newMessage = await this.messageRepository.create({
        text,
        userId,
        groupId
      })
      return newMessage.id
      
    } catch (error) {
      console.log('create message error', error)
    }
  }
}

module.exports = CreateMessage