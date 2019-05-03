const { Router } = require("express")
const { inject } = require("awilix-express")
const Status = require("http-status")

const UserController = {
  get router() {
    const router = Router()

    router.use(inject("userSerializer"))
    router.get("/", inject("getAllUsers"), this.index)
    router.get("/:id", inject("getUser"), this.get)
    router.post("/", inject("createUser"), this.post)
    router.post("/join-group", inject("joinGroup"), this.makeJoinGroup)
    router.get("/:id/group", inject("getUserGroups"), this.getGroupsByUser)
    
    // testing
    router.post("/message", inject("createMessage"), this.createMessage)
    router.post("/group", inject("createGroup"), this.createGroup)

    return router
  },

  index(req, res, next) {
    const { getAllUsers } = req
    getAllUsers
      .execute()
      .then(result => {
        res.send(result)
      })
      .catch(err => {
        res.send(err)
      })
  },

  get(req, res, next) {
    const id = req.params.id
    const { getUser } = req
    getUser
      .execute(id)
      .then(result => {
        res.send(result)
      })
      .catch(err => {
        res.send(Status[404])
      })
  },

  post(req, res, next) {
    const payload = {
      name: req.body.name,
      password: req.body.password
    }
    const { createUser } = req

    createUser
      .execute(payload)
      .then(user => {
        res.send(user)
      })
      .catch(err => {
        res.send(Status[400])
      })
  },

  createMessage(req, res, next) {
    const payload = {
      userId: req.body.userId,
      groupId: req.body.groupId,
      text: req.body.text
    }

    const { createMessage } = req

    createMessage.execute(payload).then(message => {
      res.send(message)
    })
  },

  createGroup(req, res, next) {
    const payload = {
      userId: req.body.userId,
      name: req.body.name
    }
    const { createGroup } = req
    createGroup.execute(payload).then(id => {
      res.send({ id })
    })
  },

  makeJoinGroup(req, res, next) {
    const { joinGroup } = req

    const payload = {
      userId: req.body.userId,
      groupId: req.body.groupId
    }
    joinGroup.execute(payload).then(result => {
      res.send(result)
    })
    // res.send(Status[200])
  },

  getGroupsByUser(req, res, next) {
    const { getUserGroups } = req
    getUserGroups.execute(req.params.id).then(result => {
      res.send(result)
    })
  }
}

module.exports = UserController
