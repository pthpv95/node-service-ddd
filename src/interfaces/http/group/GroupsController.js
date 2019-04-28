const { Router } = require("express")
const { inject } = require("awilix-express")
const Status = require("http-status")

const UserController = {
  get router() {
    const router = Router()
    router.get("/:id", inject("getGroup"), this.getGroup)
    router.get('/by-user/:id', inject('getUserGroups'), this.getGroupsByUser)
    return router
  },

  getGroup(req, res, next) {
    const { getGroup } = req
    const id = req.params.id
    getGroup.execute(id).then((result) => {
      res.send(result)
    })
  },

  getGroupsByUser(req, res, next){
    const { getUserGroups } = req
    getUserGroups.execute(req.params.id).then((result)=>{
      res.send(result)
    })
  }
}

module.exports = UserController
