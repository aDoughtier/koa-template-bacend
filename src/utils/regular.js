
//用户名 , 数字字母下划线中文
const usernameReg = /^[\u4E00-\u9FA5\w]{3,8}$/;
//密码校验，大小写字母，数字，!@#$%^&*,_ 三者兼具
const passwordReg = /^(?=.*[0-9])(?=.*[A-Za-z])(?=.*[!@#$%^&*,\._])[0-9a-zA-Z!@#$%^&*,_]{8,12}$/
//手机号  数字，-
const phoneNumberReg = /^[-\d]{3,20}$/
//邮箱
const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

//微信号正则，6至20位，以字母开头，字母，数字，减号，下划线
const wechatReg = /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/;

module.exports = {
  usernameReg,
  passwordReg,
  phoneNumberReg,
  emailReg,
  wechatReg
}