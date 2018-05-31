const goodEntity = require("../entity/entity");
const sql = require("../sql/connect");

let helper = require("../tool/helper");

let queryGood = async (ctx, next) => {
    let query = ctx.query;
    let sqlRes = await sql.query("select * from goodart");
    return sqlRes;
};

let queryAllGoodArtByArtId = async (ctx, next) => {
    let query = ctx.request.body,
        result;
    if (!query.artid) {
        let str = "缺少" + "artid" + "参数";
        result = new goodEntity.result(2001, str, null);
    } else {
        try {
            let sqlRes = await sql.query("select * from goodart where artid = ?", [query.artid]);
            result = new goodEntity.result(2000, "查询成功", sqlRes);
        } catch (error) {
            result = new goodEntity.result(2002, "查询数据失败", null);
        }
    }
    return result;
};

let addNewGoodArt = async (ctx, next) => {
    let query = ctx.request.body,
        result;
    let good = new goodEntity.good(query.goodid, query.artid, query.userid);
    if (!helper.detectIsEmpty(good, ['goodid']).flag) {
        let str = "缺少" + helper.detectIsEmpty(good).EmptyItem + "参数";
        result = new goodEntity.result(2001, str, null);
    } else {
        try {
            let sqlRes_addGood = await sql.query("insert into goodart values (null,?,?)", [good.artid, good.userid]);
            let upDate = await sql.query("UPDATE article set goodnum = goodnum + 1 where artid = ?",[good.artid]);
            result = new goodEntity.result(2000, "添加成功", sqlRes_addGood);
        } catch (error) {
            console.log(error);
            result = new goodEntity.result(2002, "插入数据失败", null);
        }
    }
    return result;
};

let queryGoodArtByItem = async (ctx, next) => {
    let query = ctx.query,
        result;
    let good = new goodEntity.good(query.goodid, query.artid, query.userid);
    if (!helper.detectIsEmpty(good, ['goodid']).flag) {
        let str = "缺少" + helper.detectIsEmpty(good).EmptyItem + "参数";
        result = new goodEntity.result(2001, str, null);
    } else {
        try {
            let sqlRes_addGood = await sql.query("SELECT * from goodart where userid = ? and artid = ?", [good.userid, good.artid]);
            let para = {
                isGood: false
            }
            if (sqlRes_addGood.length > 0) {
                para["isGood"] = true;
            }
            result = new goodEntity.result(2000, "查询成功", para);
        } catch (error) {
            console.log(error);
            result = new goodEntity.result(2002, "查询数据失败", null);
        }
    }
    return result;
}

let queryHaveGoodComment = async (ctx, next) => { // 获取已经点赞的评论
    let query = ctx.request.body,
        result;
    if(!query.userid || !query.commentid ){
        let str = "缺少参数";
        result = new goodEntity.result(2001, str, null);
    } else{
        try {
            let sqlRes_addGood = await sql.query("SELECT * from commentart where commentid = ? and userid = ?", [query.commentid, query.userid]);
            let para = {
                isGood: false
            }
            if (sqlRes_addGood.length > 0) {
                para["isGood"] = true;
            }
            result = new goodEntity.result(2000, "查询成功", para);
        } catch (error) {
            console.log(error);
            result = new goodEntity.result(2002, "查询数据失败", null);
        }
    }
}


module.exports = {
    queryGood: queryGood,
    addNewGoodArt: addNewGoodArt, // 添加新的评论
    queryGoodArtByItem: queryGoodArtByItem, // 查询符合条件的点赞 两个条件
    queryAllGoodArtByArtId: queryAllGoodArtByArtId, // 查询artid 下的点赞
    queryHaveGoodComment: queryHaveGoodComment // 查询评论是否点过赞
};