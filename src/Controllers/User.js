//根据不同的url选择对应的处理函数
// const {  usernameReg,
//   passwordReg,
//   phoneNumberReg, 
//   emailReg,
  // wechatReg} = require("@/utils/regular")
const { createUser, getUserByUsername, getUserByUsernameOrPasswordOrPhoneNumberOrEmailOrWechat } = require("../Service/User")

class UserController {
  //用户名校验
  async usernameVerify(ctx, next) {
    const {username} = ctx.query
    const user = await getUserByUsername(username)
    if (user) {
      ctx.status = 409
      ctx.body = {
        message: "用户名已存在"
      }
    } else {
      ctx.status = 200
      ctx.body = {
        message: "合法的用户名"
      }
    }
  }
  //注册
  async register(ctx, next) {
    // 1. 获取数据
    const { username, password, phoneNumber,email } = ctx.request.body
    //业务代码
    //1.校验非法字段
    if (!username || !password || !phoneNumber) {
      console.error("用户名或者密码或者手机号非法", ctx.request.body)
      ctx.status = 400
      ctx.body = {
        message: "没有用户名或者密码或者手机号非法",
      }
      return
    }
    //2.校验用户名是否存在
    if (await getUserByUsername(username)) {
      console.error("用户名已存在")
      ctx.status = 409
      ctx.body = {
        message: "用户名已存在",
      }
      return
    }
    // 2. 操作数据库,拆分了service层，主要是为了低耦合
    const res = await createUser({ username, password,phoneNumber,email,wechat })
    // const res = await user.createUser({username, password,isAdmin:1})
    // 3. 返回结果
    ctx.status = 200 
    ctx.body = {
      message: "用户注册成功",
      data: {
        userUuid: res.userUuid,
        username: res.username
      }
    }
  }

  async login(ctx, next) {
    const { username, password } = ctx.request.body
    ctx.body = '登录成功'
  }
}

module.exports = new UserController()