//环境配置
//之所以能读取到.env文件，是因为我们启动的时候当前工作目录是node_koa_backend ,如果我们不是在这个目录下启动的，就读取不到
//不用了，直接读字典
// const { APP_PORT } = require("./config/config.default")
const { APP_PORT } = require("./config/dictionary.config")
//koa框架
const app = require('./app')

app.listen(APP_PORT, () => {
  console.log(`the server is served at http://localhost:${APP_PORT}`)
})