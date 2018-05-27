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
        let start = (page-1) * limit,
            end = page * limit;
        try {
            let sqlRes = await sql.query("select a.artid,a.title,a.subtitle,a.titleimg,a.goodnum,a.viewnum,a.comnum,u.nickname from article as a inner JOIN user as u on  a.userid = u.userid limit ?,?",[start,end]);
            result = new articleEntity.result(2000, "查询成功", sqlRes);
        } catch (error) {
            console.log(error);
            result = new articleEntity.result(2002, "查询数据失败", null); 
        }  
    }else{
        let str = "缺少参数";
        result = new articleEntity.result(2001, str, null);
    }    
    //let article = new userEntity.article(query.title,query.subtitle,query.titleimg,query.content,query.userid);       
    return result; 
};

let queryArticleById = async (ctx, next) => {
    let query = ctx.query,
        result;
    let id = query.id || 1;
    if(id && id!=0){
        try {
            let sqlRes = await sql.query("SELECT * from article WHERE artid = ?",[id]);
            result = new articleEntity.result(2000, "查询成功", sqlRes[0]);
        } catch (error) {
            console.log(error);
            result = new articleEntity.result(2002, "查询数据失败", null); 
        }  
    }else{
        let str = "缺少id参数";
        result = new articleEntity.result(2001, str, null);
    }    
    //let article = new userEntity.article(query.title,query.subtitle,query.titleimg,query.content,query.userid);       
    return result; 
};

let addArticle = async(ctx, next) => {
    let query = ctx.request.body,
        result;
    console.log(query);    
    let article = new articleEntity.article(query.title, query.subtitle, query.titleimg, query.content, query.userid,query.theme,query.tag);
    if (!helper.detectIsEmpty(article).flag) {
        let str = "缺少" + helper.detectIsEmpty(article).EmptyItem + "参数";
        result = new articleEntity.result(2001, str, null);
    } else{
        try {
            let sql_add = await sql.query("INSERT INTO article VALUES (null,?,?,?,?,?,0,0,now(),0,?,?)",[query.title, query.titleimg, query.subtitle, query.content, query.userid,query.theme,query.tag]);
            result = new articleEntity.result(2000, "请求数据成功", {
                isAdd: true,
                newUserInfo: sql_add[0]
            }); 
        } catch (error) {
            console.log(error);
            result = new articleEntity.result(2002, "插入数据失败", null);
        }
    }
    return result;
}

module.exports = {
    queryArticle: queryArticle,
    addArticle: addArticle,
    queryArticleById: queryArticleById
};