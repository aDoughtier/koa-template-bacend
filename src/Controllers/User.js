//根据不同的url选择对应的处理函数
const user = require("../Service/User")

class UserController {
  async register(ctx, next) {
    // 1. 获取数据
    const { username, password } = ctx.request.body
    //业务代码
    if (!username || !password) {
      console.error("没有用户名或者密码", ctx.request.body)
      ctx.status = 400
      ctx.body = {
        message: "没有用户名或者密码",

      }
      return
    }
    // if()
    // 2. 操作数据库,拆分了service层，主要是为了低耦合
    const res = await user.createUser({ username, password })
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