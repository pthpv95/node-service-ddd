const { Router } = require("express")
const { inject } = require("awilix-express")
const Status = require("http-status")

const UserController = {
  get router() {
    const router = Router()

    router.use(inject("userSerializer"))
    router.get('/', inject('getAllUsers'), this.index)
    router.get('/:id', inject('getUser'), this.get)
    router.post('/', inject('createUser'), this.post)
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
  },

  post(req, res, next){
    const payload = {
      name: req.body.name,
      password: req.body.password
    }
    const { createUser } = req

    createUser.execute(payload).then((user)=>{
      res.send(user)
    }).catch((err)=>{
      res.send(Status[400])
    })
  }
}

module.exports = UserController
