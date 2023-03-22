
//之所以需要填写路径是希望在非入口文件也能读取到.env文件
require("dotenv").config({
  // path: "/.env",
  debug: true
})
//会自动寻找根路径的.env文件，当然可以自动指定路径,添加到环境变量中
module.exports = process.env