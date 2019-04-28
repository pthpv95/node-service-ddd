
const SequelizeGroupMapper = {
  toEntity({ dataValues }) {
    // let messages = []
    // if(dataValues){
    //   dataValues.forEach((item)=>{
    //     item.messages.push({

    //     })
    //   })
    //   return dataValues
    // }
    return dataValues
  },

  toDatabase(survivor) {
    const { name } = survivor

    return { name }
  }
}

module.exports = SequelizeGroupMapper
