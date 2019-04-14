const { Router } = require("express")
const { inject } = require("awilix-express")
const Status = require("http-status")

const UserController = {
  get router() {
    const router = Router()

    router.use(inject("userSerializer"))
    router.get('/', inject('getAllUsers'), this.index)
    router.get('/:id', inject('getUser'), this.get)
    return router
  },

  index(req, res, next) {
    const { getAllUsers } = req
    getAllUsers.execute().then((result) => {
      res.send(result)
    }).catch((err) => {
      res.send(err)
    });
  },

  get(req, res, next){
    const id = req.params.id
    const { getUser } = req
    getUser.execute(id).then((result)=>{
      res.send(result)
    }).catch((err)=>{
      res.send(Status[404])
    })
  }
}

module.exports = UserController
