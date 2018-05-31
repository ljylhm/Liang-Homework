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
  let sqlRes = await sql.query("select * from user");
  return sqlRes;
};

let isNew = async (ctx, next) => {
  let query = ctx.query,
    phone = query.phone,
    result = null; 
  if (!phone) {
    result = new userEntity.result(2001, "缺少phone参数", null);
  } else {
    try {
      let sqlRes = await sql.query("select * from user where phone = ?", [phone]);
      if (sqlRes.length) {
        result = new userEntity.result(2000, "查询成功", {
          isNew: false
        })
      } else {
        result = new userEntity.result(2000, "查询成功", {
          isNew: true
        })
      }
    } catch (error) {
      result = new userEntity.result(2002, "查询失败", null);
    }
  }
  return result;
}

let queryUserItem = async (ctx, next) => { // 校验用户信息
  let query = ctx.request.body,
    result;
  let name = query.phonenum,
    password = query.pas; 
  if (!name || !password) {
    let str = "缺少参数";
    result = new userEntity.result(2001, str, null);
  } else {
    try {
      let sqlRes = await sql.query("SELECT * FROM user WHERE phone = ? and password = ? and type = 1", [name, password]);
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
      console.log(error);
      result = new userEntity.result(2002, "查询发生错误", null);
    }
  }
  return result;
}

// 插入用户的信息 post
let addUser = async (ctx, next) => {
  var defaultHeadimg = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526562537453&di=885ef687cfd6494627b856ad03eb20e6&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01655a595aec51a8012193a3e131d0.jpg";
  let query = ctx.request.body,
      result;    
  let user = new userEntity.user(query.nickname,query.sex,query.phone,query.email,query.pas,query.headimg);
  // 检测user中是否有空对
  if (!helper.detectIsEmpty(user,['nickname','sex','headimg']).flag) {
    let str = "缺少" + helper.detectIsEmpty(user).EmptyItem + "参数";
    result = new userEntity.result(2001, str, null);
  } else {
    try {
      console.log(user);
      // 默认插入用户的时候状态为存在状态 1存在 0不存在 创建时间默认为服务器当前时间
      // 并且返回插入用户的信息
      let sqlRes_addUser = await sql.query("insert into user values (null,?,1,?,?,?,?,1,18)", ["用户"+helper.getTimeStamp(),user.phone,user.email,user.password,defaultHeadimg]);
      result = new userEntity.result(2000, "添加成功", sqlRes_addUser);
    } catch (error) {
      console.log(error);
      result = new userEntity.result(2002, "插入数据失败", null);
    }
  }
  return result;
};

let upDateUserInfo = async (ctx, next) => {
  let query = ctx.request.body,
      result;   
  let user = new userEntity.user(query.nickname,query.sex,query.phone,query.email,query.password,query.headimg,query.userid);
  // 检测user中是否有空对
  if (!helper.detectIsEmpty(user).flag) {
    let str = "缺少" + helper.detectIsEmpty(user).EmptyItem + "参数";
    result = new userEntity.result(2001, str, null);
  } else {
    try {
      // 默认插入用户的时候状态为存在状态 1存在 0不存在 创建时间默认为服务器当前时间
      // 并且返回插入用户的信息
      let sqlRes_addUser = await sql.query("UPDATE user set sex = ?,nickname = ?,phone = ?,email=?,headimg=?,age=?,password=? where userid = ?", [user.sex,user.nickname,user.phone,user.email,user.headimg,query.age,user.password,query.userid]);
      result = new userEntity.result(2000, "修改成功", sqlRes_addUser);
    } catch (error) {
      console.log(error);
      result = new userEntity.result(2002, "修改数据失败", null);
    }
  }
  return result;
}

module.exports = {
  addUser: addUser,
  queryUserItem: queryUserItem,
  queryUser: queryUser,
  isNew: isNew,
  upDateUserInfo: upDateUserInfo
};
