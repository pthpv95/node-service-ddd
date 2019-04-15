
class MessageRepository {
  constructor({ MessageModel }){
    this.messageModel = MessageModel
  }

  async create(...args){
    const message = await this.messageModel.create(...args)
    return message
  }
}


module.exports = MessageRepository