const Koa = require('koa');
const path = require("path");
const cors = require("koa2-cors");
const serve = require("koa-static");
const koaBody = require("koa-body");
const fs = require("fs");
const bodyParser = require('koa-bodyparser');
const app = new Koa();

let router = require('./tool/dispenseRoutes');
let helper = require('./tool/helper');
let expand = require('./tool/expand') // 为js的原生对象添加一些方法

const allowUrl = [
    "http://10.15.89.81:8086"
]

// 启用静态资源
app.use(serve(__dirname + "/public"));

// 初始化服务器地址
app.use(async (ctx, next) => {
    let host = ctx.header.host;
    helper.initAddress(host);
    await next();
})

// 利用cors跨域
app.use(cors({
    origin: function (ctx) {
        let origin = ctx.header.origin;
        if(allowUrl.includes(origin)) return origin;
        return false;
    }
}));

//app.use(bodyParser());
app.use(koaBody({multipart: true}))

app.use(router.routes())
    .use(router.allowedMethods())

app.listen(3000);


//1.查询接口{
//    1.1 查询所有的书籍信息
//    1.2 按照给定信息查找 
//}
//2.插入接口{
//    2.1 借阅人员的注册,
//    2.2 书籍的录入 
//}
//3.修改接口{
//    3.1 修改书籍信息(人员信息不可修改)   
//}
//4.删除接口{
//    4.1 修改书籍在货架的状态(类似于删除)    
//} 
