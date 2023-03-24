
const user = require("../Model/User")
//用户名校验
const getUserByUsername = async (username) => {
  const user = await user.findOne({ where: { username } })
  return user ? user.toJSON() : null
}

module.exports = {
  getUserByUsername
}