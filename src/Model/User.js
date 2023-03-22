const { DataTypes } = require('sequelize')
//seq对象，定义数据库表结构
const seq = require('../db/sequelize')

// 创建模型(Model user -> 表 users) ,由一个库自动完成，复数，但是我不想这样
const User = seq.define('koa_user', {
  // id 会被sequelize自动创建, 管理
  userUuid: {
    type: DataTypes.UUID,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
    unique: true,
    comment: "唯一标识"
  },
  //虽然带过来的用户名没有标记为唯一标识，但是我们可以在用户注册的时候先检索一遍数据库，保证这个唯一，之后如果用户有需求，可以更改这个，比如每隔几个月允许更改一次
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '用户名',
  },
  password: {
    type: DataTypes.CHAR(64),
    allowNull: false,
    comment: '密码',
  },
  phoneNumber: {
    type: DataTypes.CHAR(20), //一个中文占据3或者4个字符，取决于字符集
    allowNull: true,
    comment: "号码"
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 0,
    comment: '是否为管理员, 0: 不是管理员(默认); 1: 是管理员',
  },
  //会自动创建createAt ,updateAt
  // createTime: {
  //   type: DataTypes.DATE,
  //   allowNull: false,
  //   defaultValue: DataTypes.NOW,
  //   comment: "创建时间"
  // },
  // updateTime: {
  //   type: DataTypes.DATE,
  //   allowNull: false,
  //   defaultValue: DataTypes.NOW,
  //   comment: "更新时间"
  // }

}, {
  tableName: "koa_ user", //自定义表名
  //这三个应该在创建数据库的时候就指定，之后创建表的时候就只需要指定表名
  charset:"utf8mb4", //这个字符集一个中文占据4个字符
  collate:" utf8mb4_general_ci", //指定排序规则
  engine:"InnoDB" //指定引擎
  // timestamps: false // 禁用自动记录的时间戳
})
//一般执行一遍就行了，但是这样岂不是每一个模型都需要执行一次？？？
// User.sync() //- 如果表不存在,则创建该表(如果已经存在,则不执行任何操作)
// User.sync({ force: true }) //- 将创建表,如果表已经存在,则将其首先删除
// User.sync({ alter: true }) - 这将检查数据库中表的当前状态(它具有哪些列,它们的数据类型等),然后在表中进行必要的更改以使其与模型匹配.

module.exports = User