//负责处理数据库操作
const User = require("../Model/User")
class UserService {
  //创建用户
  async createUser(userInfo) {
    const {
      username,
      password,
      phoneNumber,
      email = null,
      wechat = null,
      isAdmin = 0
    } = userInfo
    // 虽然User是一个类，但是不应该通过new去调用
    /**
     * 方式1
     *      const user = User.build({ username, password }) //同步方法 ， seqlize的绝大多数方法
     *      都是异步的
     *      console.log(user instanceof User); // true
     *      console.log(user.username); // "zett"
     *      但是,以上代码根本无法与数据库通信(请注意,它甚至不是异步的)！ 这是因为 build 方法仅创建一
     *      个对象,该对象 表示 可以 映射到数据库的数据. 为了将这个实例真正保存(即持久保存)在数据库中,
     *      应使用 save 方法：
     *      await user.save();
     */
    //方式2
    const user = await User.create({
      username,
      password,
      phone_number: phoneNumber,
      email,
      wechat,
      is_admin: isAdmin
    })
    //最好不要直接打印这个对象，因为有很多其他属性
    // console.log(user)
    // console.log(user.toJSON()); // 最好
    // console.log(JSON.stringify(user, null, 4)); // 也不错
    return user.toJSON()
  }
  //仅通过用户名查询
  async getUserByUsername(username) {
    const user = await User.findOne({ where: { username } })
    return user ? user.toJSON() : null
  }

  //查询用户:可用与修改用户名功能，忘记密码重置功能，登录功能,注册功能
  async getUserByUsernameOrPasswordOrPhoneNumberOrEmailOrWechat({ userUuid, username, password, phoneNumber, email, wechat }) {
    let whereOpt = {}
    userUuid && (whereOpt = { ...whereOpt, user_uuid: userUuid })
    username && (whereOpt = { ...whereOpt, username })
    password && (whereOpt = { ...whereOpt, password })
    phoneNumber && (whereOpt = { ...whereOpt, phone_number: phoneNumber })
    email && (whereOpt = { ...whereOpt, email })
    wechat && (whereOpt = { ...whereOpt, wechat })
    //sql语句
    const user = await User.findOne({ where: whereOpt })
    return user ? user.toJSON() : null
  }
}

module.exports = new UserService()