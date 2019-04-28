const { attributes } = require("structure")

const Group = attributes({
  id: String,
  name: {
    type: String,
    require: true
  },
  members: []
})(class Group{
  
})

module.exports = Group