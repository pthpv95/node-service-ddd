const { attributes } = require("structure")

const User = attributes({
  id: Number,
  name: {
    type: String,
    require: true
  },
  age: Number
})(class User{
  
})

module.exports = User