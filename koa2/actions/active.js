// 活动表的动作方法
const activeEntity = require("../entity/entity");
const sql = require("../sql/connect");

let helper = require("../tool/helper");

let addActive = async (ctx, next) => {
    let query = ctx.request.body,
        result;
    let active = new activeEntity.active(query.activeid, query.userid, query.title, query.subtitle, query.titleimg, query.content, query.address, query.money, query.type, query.publisher, query.isExist, query.time);
    if (!helper.detectIsEmpty(active, ["activeid"]).flag) {
        let str = "缺少" + helper.detectIsEmpty(active, ["activeid"]).EmptyItem + "参数";
        result = new activeEntity.result(2001, str, null);
    } else {
        try {
            let sql_add = await sql.query("INSERT INTO active VALUES (null,?,?,?,?,?,?,?,?,?,?,?)", [query.userid, query.title, query.subtitle, query.titleimg, query.content, query.address, query.money, query.type, query.publisher, query.isExist, query.time]);
            result = new activeEntity.result(2000, "插入成功", {
                isAdd: true,
                newActiveInfo: sql_add[0]
            });
        } catch (error) {
            console.log(error);
            result = new activeEntity.result(2002, "插入数据失败", null);
        }
    }
    return result;
}

let queryAllActive = async (ctx, next) => {
    let query = ctx.query,
        result;
    let page = query.page,
        limit = query.limit;
    if (page && limit) {
        let start = (page - 1) * limit,
            end = page * limit;
        try {
            let sqlRes = await sql.query("select * from active where isExist = 1 limit ?,?", [start, end]);
            result = new activeEntity.result(2000, "查询成功", sqlRes);
        } catch (error) {
            console.log(error);
            result = new activeEntity.result(2002, "查询数据失败", null);
        }
    } else {
        let str = "缺少参数";
        result = new activeEntity.result(2001, str, null);
    }
    return result;
}

let queryActiveItem = async (ctx, next) => {
    let query = ctx.request.body,
        result;
    if (!query.activeid) {
        let str = "缺少" + "activeid"+ "参数";
        result = new activeEntity.result(2001, str, null);
    } else{
        try {
            let sqlRes = await sql.query("select * from active where id = ?", [query.activeid]);
            result = new activeEntity.result(2000, "查询成功", sqlRes[0]);
        } catch (error) {
            console.log(error);
            result = new activeEntity.result(2002, "查询数据失败", null);
        }
        return result;
    }
}

module.exports = {
    addActive: addActive,
    queryAllActive: queryAllActive,
    queryActiveItem: queryActiveItem
};