// 文章表的动作方法
const articleEntity = require("../entity/entity");
const sql = require("../sql/connect");

let helper = require("../tool/helper");

let queryArticle = async (ctx, next) => {
    let query = ctx.query,
        result;
    let page = query.page,
        limit = query.limit;
    if(page && limit){
        let start = (page-1) * limit + 1,
            end = page * limit;
        try {
            let sqlRes = sql.query("select a.artid,a.title,a.subtitle,a.titleimg,a.goodnum,a.viewnum,u.nickname from article as a inner JOIN user as u on  a.userid = u.userid limit ?,?",[start,end]);
            result = sqlRes;
        } catch (error) {
            console.log(error);
            result = new userEntity.result(2002, "插入数据失败", null); 
        }  
    }else{
        let str = "缺少参数";
        result = new userEntity.result(2001, str, null);
    }    
    //let article = new userEntity.article(query.title,query.subtitle,query.titleimg,query.content,query.userid);       
    return result; 
};

module.exports = {
    queryArticle:queryArticle
};