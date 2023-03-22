
const Koa = require("koa")
//不支持 multipart-form-data 
const bodyparser = require("koa-bodyparser")
//路由
const userRouter = require('../routers/user.router')

const app = new Koa()
app.use(bodyparser())
app.use(userRouter.routes())

module.exports = app