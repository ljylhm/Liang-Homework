// 评论表的动作方法
const commentEntity = require("../entity/entity");
const sql = require("../sql/connect");

let helper = require("../tool/helper");

// 文章评论的查找方法
let queryCommentArt = async (ctx, next) => {
    let query = ctx.query,
    result;
    let artid = query.artid;
    if(artid){
        try {
            let sqlRes = await sql.query("SELECT a.*,b.nickname from commentart as a inner join user as b WHERE b.userid = a.userid and a.artid = ?",[artid]);
            result = new commentEntity.result(2000, "查询成功", sqlRes);
        } catch (error) {
            console.log(error);
            result = new commentEntity.result(2002, "查询数据失败", null); 
        } 
    }else{
        let str = "缺少参数";
        result = new commentEntity.result(2001, str, null);
    }    
    return result; 
}    

module.exports = {
    queryCommentArt: queryCommentArt
};