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
            let sqlRes = await sql.query("SELECT a.*,b.nickname,b.headimg from commentart as a inner join user as b WHERE b.userid = a.userid and a.artid = ? order by a.creatAt desc",[artid]);
            if(sqlRes.length){
                for(let i of sqlRes){
                    if(i.isMore == 1){
                        let queryA = await sql.query("select b.nickname as morename from commentart as a inner join user as b where a.userid = b.userid and commentid = ?",[i.refid]);
                        i.morename = queryA[0].morename;
                    }
                }   
            }
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

let queryCommentArt2 = async (ctx, next) => {
    let query = ctx.query,
        result;
    let artid = query.artid;
    if(artid){
        try {
            let sqlRes = await sql.query("SELECT a.*,b.nickname,b.headimg from commentactive as a inner join user as b WHERE b.userid = a.userid and a.activeid = ? order by a.creatAt desc",[artid]);
            if(sqlRes.length){
                for(let i of sqlRes){
                    if(i.isMore == 1){
                        let queryA = await sql.query("select b.nickname as morename from commentactive as a inner join user as b where a.userid = b.userid and commentid = ?",[i.refid]);
                        i.morename = queryA[0].morename;
                    }
                }
            }
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

let queryCommentArt3 = async (ctx, next) => {
    let query = ctx.query,
        result;
    let artid = query.artid;
    if(artid){
        try {
            let sqlRes = await sql.query("SELECT a.*,b.nickname,b.headimg from commentchat as a inner join user as b WHERE b.userid = a.userid and a.commentid = ? order by a.creatAt desc",[artid]);
            if(sqlRes.length){
                for(let i of sqlRes){
                    if(i.isMore == 1){
                        let queryA = await sql.query("select b.nickname as morename from commentchat as a inner join user as b where a.userid = b.userid and commentid = ?",[i.refid]);
                        i.morename = queryA[0].morename;
                    }
                }
            }
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

let addCommentAct = async (ctx,next)=>{
    let query = ctx.request.body,
        result;
    let article = new commentEntity.comment(query.commentid,query.artid,query.userid,query.content,query.creatAt,query.refid,query.goodnum,query.isMore);
    let res = helper.detectIsEmpty(article, ["commentid","creatAt","goodnum"]);
    if(!res.flag){ // 5.28 修改代码至此；
        let str = "缺少" +res.EmptyItem + "参数";
        result = new commentEntity.result(2001, str, null);
    }else{
        try {
            let sqlRes_addComment = await sql.query("insert into commentart VALUES(null,?,?,?,now(),?,0,?)", [query.artid,query.userid,query.content,query.refid,query.isMore]);
            let upDate = await sql.query("UPDATE article set comnum = comnum + 1 where artid = ?",[query.artid]); 
            result = new commentEntity.result(2000, "添加成功", sqlRes_addComment);
          } catch (error) {
            console.log(error);
            result = new commentEntity.result(2002, "插入数据失败", null);
          }
    }
    return result;
}

let addCommentAct2= async (ctx,next)=>{
    let query = ctx.request.body,
        result;
    let article = new commentEntity.comment(query.commentid,query.artid,query.userid,query.content,query.creatAt,query.refid,query.goodnum,query.isMore);
    let res = helper.detectIsEmpty(article, ["commentid","creatAt","goodnum"]);
    if(!res.flag){ // 5.28 修改代码至此；
        let str = "缺少" +res.EmptyItem + "参数";
        result = new commentEntity.result(2001, str, null);
    }else{
        try {
            let sqlRes_addComment = await sql.query("insert into commentactive VALUES(null,?,?,?,now(),?,0,?)", [query.artid,query.userid,query.content,query.refid,query.isMore]);
            result = new commentEntity.result(2000, "添加成功", sqlRes_addComment);
          } catch (error) {
            console.log(error);
            result = new commentEntity.result(2002, "插入数据失败", null);
          }
    }
    return result;
}

let addCommentAct3= async (ctx,next)=>{
    let query = ctx.request.body,
        result;
    let article = new commentEntity.comment(query.commentid,query.artid,query.userid,query.content,query.creatAt,query.refid,query.goodnum,query.isMore);
    let res = helper.detectIsEmpty(article, ["commentid","creatAt","goodnum"]);
    if(!res.flag){ // 5.28 修改代码至此；
        let str = "缺少" +res.EmptyItem + "参数";
        result = new commentEntity.result(2001, str, null);
    }else{
        try {
            let sqlRes_addComment = await sql.query("insert into commentchat VALUES(null,?,?,?,now(),?,0,?)", [query.artid,query.userid,query.content,query.refid,query.isMore]);
            result = new commentEntity.result(2000, "添加成功", sqlRes_addComment);
          } catch (error) {
            console.log(error);
            result = new commentEntity.result(2002, "插入数据失败", null);
          }
    }
    return result;
}

module.exports = {
    queryCommentArt: queryCommentArt,
    queryCommentArt2: queryCommentArt2,
    queryCommentArt3: queryCommentArt3,
    addCommentAct: addCommentAct,
    addCommentAct2: addCommentAct2,
    addCommentAct3: addCommentAct3
};