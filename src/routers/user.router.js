const router = require('koa-router')({ prefix: '/user' })

const { register, login ,usernameVerify} = require('../Controllers/User')

//校验用户名是否存在
router.get("/register-username-verify",usernameVerify)

// 注册接口
router.post('/register',register)

// 登录接口
router.post('/login', login)

module.exports = router