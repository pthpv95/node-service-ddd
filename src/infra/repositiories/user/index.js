const UserMapper = require("./mapper")

class SequelizeUsersRepository {
  constructor({ UserModel }) {
    this.UserModel = UserModel
  }

  async getAll(...args) {
    const users = await this.UserModel.findAll(...args);

    return users.map(UserMapper.toEntity);
  }

  async getById(id){
    const users = await this.UserModel.findAll({
      where:{
        id
      }
    })
    if(users.length === 0){
      throw new Error('USER_NOT_FOUND')
    }else{
      return UserMapper.toEntity(users[0])
    }
  }
}

module.exports = SequelizeUsersRepository
