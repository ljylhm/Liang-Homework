const router = require("koa-router")();
const sql = require('../sql/connect');
const formidable = require('formidable');
const fs = require("fs");
const userEntity = require("../entity/entity")
const guid = require("../tool/guid")

let helper = require('../tool/helper');
let useAct = require("../actions/user")

// 添加用户
router.get('/queryUser', async (ctx, next) => {
    let result = await useAct.queryUser(ctx, next)
    ctx.type = "json";
    ctx.body = result;
})

// 验证手机号码
router.get("/isNew", async (ctx, next) => {
    let result = await useAct.isNew(ctx, next)
    ctx.type = "json";
    ctx.body = result;
})

// 添加新用户
router.post('/addUser', async (ctx, next) => {
    let result = await useAct.addUser(ctx, next);
    ctx.type = "json";
    ctx.body = result;
})

router.post('/userLogin', async (ctx, next) => {
    let result = await useAct.queryUsesItem(ctx, next);
    ctx.type = "json";
    ctx.body = result;
})

// 上传头像
router.post('/bookImg', async (ctx, next) => {

    let form = new formidable.IncomingForm();
    let res = "",
        dirName = "/img/";
    let query = ctx.request.body;
    form.encoding = 'utf-8';
    form.uploadDir = "public" + "/img/";
    form.keepExtensions = true;
    let fn = new Promise((resolve) => {

        form.parse(ctx.req, async function (err, fields, files) {
            // koa的回调函数里 ctx.body 调用不了？？
            let type = "";
            console.log("传过来的file里的信息>>>>>");
            console.log(JSON.stringify(files));
            console.log("fields");
            console.log(fields);
            if (err) {
                throw err;
                return;
            }
            // 获取后缀名
            let extname = "";
            try {
                type = files.file.type || "";
            } catch (error) {
                console.log(error);
            }

            switch (type) {
                case 'image/pjpeg':
                    extName = 'jpg';
                    break;
                case 'image/jpeg':
                    extName = 'jpg';
                    break;
                case 'image/png':
                    extName = 'png';
                    break;
                case 'image/x-png':
                    extName = 'png';
                    break;
                default:
                    extname = "";
            }

            if (extName.length == 0) {
                res = new userEntity.result(2003, "只支持png和jpg格式图片", null);
                return resolve(res)
            }

            let avatarName = guid.guid() + '.' + extName;
            let newPath = form.uploadDir + avatarName,
                exportDir = dirName + avatarName;

            try {
                await fs.renameSync(files.file.path, newPath);
                res = new userEntity.result(2000, "请求数据成功", {
                    imgUrl: "http://" + helper.initAddress() + exportDir
                })
                return resolve(res)
            } catch (error) {
                throw error;
            }
        });
    })

    let data = await fn;

    ctx.type = "json";
    ctx.body = data;
})

router.post("/upLoadImg", async (ctx, next) => {

    let buf = [];
    let query = ctx.request.body,
        result = {
            name: "Billy"
        };
    let name = query.files.file.name;
    console.log(query);
    let readStream = fs.createReadStream(query.files.file.path); // 这个path 不造是前端的地址传到后台的地址
    let para = {
        name: name,
        stream: readStream
    }
    let fn = new Promise((resolve) => {
        helper.upLoadQiNiu(para, (respErr, respBody, respInfo) => {
            if (respErr) {
                throw respErr;
                result = new userEntity.result(2002, "上传失败", null)
                resolve(result);
            }
            if (respInfo.statusCode == 200) {
                console.log(respInfo);
                result = new userEntity.result(2000, "请求数据成功", {
                    imgUrl: "http://p3s00of2j.bkt.clouddn.com/" + respInfo.data.key
                });
                resolve(result);
            } else {
                result = new userEntity.result(2002, "未知原因上传失败", null);
                resolve(result)
            }
            readStream.close(); // 关闭可读流读取
        })
    })
    let data = await fn;

    ctx.type = "json";
    ctx.body = data;
})

module.exports = router;