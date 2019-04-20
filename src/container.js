const { createContainer, asClass, asFunction, asValue } = require("awilix")
const { scopePerRequest } = require("awilix-express")

const config = require("../config")
const Application = require("./app/Application")

const Server = require("./interfaces/http/Server")
const router = require("./interfaces/http/router")
const loggerMiddleware = require("./interfaces/http/logging/loggerMiddleware")
const errorHandler = require("./interfaces/http/errors/errorHandler")
const devErrorHandler = require("./interfaces/http/errors/devErrorHandler")
const swaggerMiddleware = require("./interfaces/http/swagger/swaggerMiddleware")
const UserSerializer = require("./interfaces/http/user/UserSerializer")
const logger = require("./infra/logging/logger")
const { database, User: UserModel, Messages: MessageModel, Groups: GroupsModel, GroupUser: GroupUserModel } = require("./infra/database/models")
const SequelizeUsersRepository = require("./infra/repositiories/user/")
const MessagesRepository = require("./infra/repositiories/message")
const GroupsRepository = require("./infra/repositiories/group")
const { GetAllUsers, GetUser, CreateUser } = require("./app/user")
const { CreateMessage } = require("./app/message")
const { CreateGroup } = require('./app/group')

const container = createContainer()

// System
container
  .register({
    app: asClass(Application).singleton(),
    server: asClass(Server).singleton()
  })
  .register({
    router: asFunction(router).singleton(),
    logger: asFunction(logger).singleton()
  })
  .register({
    config: asValue(config)
  })

// Middlewares
container
  .register({
    loggerMiddleware: asFunction(loggerMiddleware).singleton()
  })
  .register({
    containerMiddleware: asValue(scopePerRequest(container)),
    errorHandler: asValue(config.production ? errorHandler : devErrorHandler),
    swaggerMiddleware: asValue([swaggerMiddleware])
  })

// Repositories
container.register({
  userRepository: asClass(SequelizeUsersRepository).singleton(),
  messageRepository: asClass(MessagesRepository).singleton(),
  groupsRepository: asClass(GroupsRepository).singleton()
})

// Database
container.register({
  database: asValue(database),
  UserModel: asValue(UserModel),
  MessageModel: asValue(MessageModel),
  GroupModel: asValue(GroupsModel),
  GroupUserModel: asValue(GroupUserModel)
})

// Operations
container.register({
  createUser: asClass(CreateUser),
  getAllUsers: asClass(GetAllUsers),
  getUser: asClass(GetUser),
  //   updateUser: asClass(UpdateUser),
  //   deleteUser: asClass(DeleteUser),
  createMessage: asClass(CreateMessage),
  createGroup: asClass(CreateGroup)
})

// Serializers
container.register({
  userSerializer: asValue(UserSerializer)
})

module.exports = container
