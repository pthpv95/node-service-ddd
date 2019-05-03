const { Router } = require("express")
const { inject } = require("awilix-express")
const Status = require("http-status")

const UserController = {
  get router() {
    const router = Router()
    router.get("/:id", inject("getGroupContent"), this.getGroupContent)
    router.get("/:id/users", inject("getGroupWithUsers"), this.getGroupWithUsers)
    router.get('/', inject('getAllGroups'), this.getAll)
    
    return router
  },

  getGroupContent(req, res, next) {
    const { getGroupContent } = req
    const id = req.params.id
    getGroupContent.execute(id).then(result => {
      res.send(result)
    })
  },

  getGroupWithUsers(req, res, next) {
    const { getGroupWithUsers } = req
    getGroupWithUsers.execute(req.params.id).then(result => {
      res.send(result)
    })
  },
  
  getAll(req,res, next){
    const { getAllGroups } = req

    getAllGroups.execute().then((result)=>{
      res.send(result)
    })
  }
}

module.exports = UserController
