//端口号
const APP_PORT = 9527

//mysql配置
const mysqlConfig = {
  MYSQL_HOST: "localhost",
  MYSQL_PORT: "3306",
  MYSQL_USER: "root",
  MYSQL_PWD: "yisa@999",
  MYSQL_DB: "koa_mysql"
}

module.exports = {
  APP_PORT,
  ...mysqlConfig
}



