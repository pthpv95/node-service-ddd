const { Router } = require("express")
const { inject } = require("awilix-express")
const Status = require("http-status")

const UserController = {
  get router() {
    const router = Router()

    router.use(inject("userSerializer"))
    router.get("/", inject("getAllUsers"), this.index)

    return router
  },

  index(req, res, next) {
    const { getAllUsers } = req
    
    // const { SUCESS, ERROR } = getAllUsers.outputs
    getAllUsers.execute().then((result) => {
      console.log('result', result)
      res.send(result)
    }).catch((err) => {
      res.send(err).status(Status[400])
    });
  }
}

module.exports = UserController
