const router = require('koa-router')({ prefix: '/user' })

const { register, login } = require('../Controllers/User')

// 注册接口
router.post('/register', register)

// 登录接口
router.post('/login', login)

module.exports = router