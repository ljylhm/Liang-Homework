// 用户表的动作方法
const userEntity = require("../entity/entity");
const sql = require("../sql/connect");

let helper = require("../tool/helper");
// 2000 请求数据成功
// 2001 缺少参数
// 2002 插入数据失败
// 2003 请求格式有误
// 2004 该用户已存在

let queryUser = async (ctx, next) => {
  let query = ctx.query;
  let sqlRes = sql.query("select * from user");
  return sqlRes;
};

let queryUsesItem = async (ctx, next) => { // 校验用户信息
  let query = ctx.request.body,
    result;
  let name = query.phonenum,
    password = query.pas;
  console.log(name, password);
  if (!name || !password) {
    let str = "缺少参数";
    result = new userEntity.result(2001, str, null);
  } else {
    try {
      let sqlRes = await sql.query("SELECT * FROM user WHERE phone = ? and password = ? and type = 1", [name, password]);
      console.log(!sqlRes.length);
      if (!sqlRes.length) {
        result = new userEntity.result(2004, "用户不存在", {
          status: false,
          userInfo: null
        });
      } else {
        result = new userEntity.result(2000, "登录校验成功", {
          status: true,
          userInfo: sqlRes[0]
        });
      }
    } catch (error) {
      result = new userEntity.result(2002, "查询发生错误", null);
    }
  }
  return result;
}

// 插入用户的信息 post
let addUser = async (ctx, next) => {
  let query = ctx.request.body,
    result;
  let user = new userEntity.user(query.nickName, query.sex, query.phone, query.email, query.password);
  // 检测user中是否有空对象
  if (!helper.detectIsEmpty(user).flag) {
    let str = "缺少" + helper.detectIsEmpty(user).EmptyItem + "参数";
    result = new userEntity.result(2001, str, null);
  } else {
    try {
      // 默认插入用户的时候状态为存在状态 1存在 0不存在 创建时间默认为服务器当前时间
      // 并且返回插入用户的信息
      let sqlRes_openid = await sql.query("select * from user WHERE nickname = ?", [user.nickName]);
      let isNew = sqlRes_openid ? true : false;
      if (!isNew) {
        result = new userEntity.result(2004, "该用户已存在", {
          isAdd: false
        });
      } else {
        let sqlRes = await sql.query("insert into user values (null,?,?,?,?,?)", [user.nickName, user.sex, user.phone, user.email, user.password]);
        result = new userEntity.result(2000, "请求数据成功", {
          isAdd: true,
          newUserInfo: sqlRes_openid[0]
        });
      }
    } catch (error) {
      console.log(error);
      result = new userEntity.result(2002, "插入数据失败", null);
    }
  }
  return result;
};

module.exports = {
  addUser: addUser,
  queryUsesItem: queryUsesItem,
  queryUser: queryUser
};
