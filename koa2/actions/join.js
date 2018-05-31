const joinEntity = require("../entity/entity");
const sql = require("../sql/connect");

let helper = require("../tool/helper");

let addJoiner = async (ctx, next) => {
    let query = ctx.request.body,
        result; 
    console.log("phone",query.phone); 
    let joiner = new joinEntity.joiner(query.id, query.userid, query.phone, query.email, query.remark,query.num,query.activeid);
    if (!helper.detectIsEmpty(joiner, ["id"]).flag) {
        let str = "缺少" + helper.detectIsEmpty(joiner, ["id"]).EmptyItem + "参数";
        result = new joinEntity.result(2001, str, null);
    } else {
        try {
            let sql_add = await sql.query("INSERT INTO joiner VALUES (null,?,?,?,?,?,?)", [query.userid, query.phone, query.email, query.remark, query.num,query.activeid]);
            result = new joinEntity.result(2000, "插入成功", {
                isAdd: true,
                newActiveInfo: sql_add[0]
            });
        } catch (error) {
            console.log(error);
            result = new joinEntity.result(2002, "插入数据失败", null);
        }
    }
    return result;
}

let haveJoin = async (ctx, next) => {
    let query = ctx.request.body,
        result;
    if(!query.userid){
        let str = "缺少userid参数";
        result = new joinEntity.result(2001, str, null);
    } else {
        try {
            let sql_add = await sql.query("select * from joiner where userid = ?", [query.userid]);
            result = new joinEntity.result(2000, "查询成功", sql_add);
        } catch (error) {
            console.log(error);
            result = new joinEntity.result(2002, "查询数据失败", null);
        }
    }
    return result;
}

let queryAllByitem = async (ctx, next) => {
    let query = ctx.request.body,
        result;
    if(!query.activeid){
        let str = "缺少activeid参数";
        result = new joinEntity.result(2001, str, null);
    } else {
        try {
            let sql_add = await sql.query("select * from joiner where activeid = ?", [query.activeid]);
            result = new joinEntity.result(2000, "查询成功", sql_add);
        } catch (error) {
            console.log(error);
            result = new joinEntity.result(2002, "查询数据失败", null);
        }
    }
    return result;
}


module.exports = {
    addJoiner: addJoiner,
    haveJoin: haveJoin,
    queryAllByitem: queryAllByitem
};