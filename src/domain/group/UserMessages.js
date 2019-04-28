const { attributes } = require("structure")
const User = require('../user/User')
const Message = require('../message/Message')

const UserMessages = attributes({
  user: {
    type: User
  },
  messages: {
    type : Message
  }
})
