//根据不同的url选择对应的处理函数
const user = require("../Service/User")

class UserController {
  async register(ctx, next) {
    // 1. 获取数据
    const { username, password } = ctx.request.body
    // 2. 操作数据库,拆分了service层，主要是为了低耦合
    const res = await user.createUser({username, password})
    // 3. 返回结果
    ctx.body = res
  }

  async login(ctx, next) {
    const { username, password } = ctx.request.body
    ctx.body = '登录成功'
  }
}

module.exports = new UserController()