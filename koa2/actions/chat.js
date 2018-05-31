const chatEntity = require("../entity/entity");
const sql = require("../sql/connect");

let helper = require("../tool/helper");

let addChat = async (ctx, next) => {
    let query = ctx.request.body,
        result;
    let chat = new chatEntity.chat(query.id, query.tag, query.title, query.titleimg, query.content, query.creatAct, query.comnum);
    if (!helper.detectIsEmpty(chat, ["id"]).flag) {
        let str = "缺少" + helper.detectIsEmpty(chat, ["id"]).EmptyItem + "参数";
        result = new chatEntity.result(2001, str, null);
    } else {
        try {
            let sql_add = await sql.query("INSERT INTO chat VALUES (null,?,?,?,?,?,?)", [query.tag, query.title, query.titleimg, query.content, query.creatAct, query.comnum]);
            result = new chatEntity.result(2000, "插入成功", {
                isAdd: true,
                newActiveInfo: sql_add[0]
            });
        } catch (error) {
            console.log(error);
            result = new chatEntity.result(2002, "插入数据失败", null);
        }
    }
    return result
}

let queryChatItem = async (ctx, next) => {
    let query = ctx.request.body,
        result;
    if (!query.chatid) {
        let str = "缺少" + "chatid" + "参数";
        result = new chatEntity.result(2001, str, null);
    } else {
        try {
            let sqlRes = await sql.query("select a.*,b.nickname,b.headimg from chat as a  inner join user as b on a.userid = b.userid where id = ?", [query.chatid]);
            result = new chatEntity.result(2000, "查询成功", sqlRes[0]);
        } catch (error) {
            console.log(error);
            result = new chatEntity.result(2002, "查询数据失败", null);
        }
        return result;
    }
}

let queryChat = async (ctx, next) => {
    let query = ctx.request.body,
        result;
    let page = query.page,
        limit = query.limit;
    if (page && limit) {
        let start = (page - 1) * limit,
            end = page * limit;
        try {
            let sqlRes = await sql.query("select * from chat where isExist = 1 limit ?,?", [start, end]);
            result = new chatEntity.result(2000, "查询成功", sqlRes);
        } catch (error) {
            console.log(error);
            result = new chatEntity.result(2002, "查询数据失败", null);
        }
    } else {
        let str = "缺少参数";
        result = new chatEntity.result(2001, str, null);
    }
    return result;

}

module.exports = {
    addChat: addChat,
    queryChat: queryChat,
    queryChatItem: queryChatItem
};