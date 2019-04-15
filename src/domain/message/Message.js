const { attributes } = require("structure")
const { User } = require('../user')

const Message = attributes({
  id: String,
  text: {
    type: String,
    require: true
  },
  user: User
})(class Message{
  
})

module.exports = Message