const bycrypt = require("bcryptjs")

const hashPassword = password => {
	const salt = bycrypt.genSaltSync(10)
	return bycrypt.hashSync(password, salt)
}

module.exports = {
	hashPassword
}
