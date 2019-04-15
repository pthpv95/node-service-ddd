const UserMapper = require("./mapper")

class SequelizeUsersRepository {
  constructor({ UserModel }) {
    this.userModel = UserModel
  }

  async getAll(...args) {
    const users = await this.userModel.findAll(...args);

    return users.map(UserMapper.toEntity);
  }

  async getById(...args){
    const user = await this.userModel.findOne(...args)
    if(!user){
      throw new Error('USER_NOT_FOUND')
    }else{
      return UserMapper.toEntity(user)
    }
  }

  async createUser(...args){
    console.log(...args)
    
    // Do some validations
    return await this.userModel.create(...args)
  }
}

module.exports = SequelizeUsersRepository
