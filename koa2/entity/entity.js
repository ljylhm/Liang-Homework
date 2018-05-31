// 返回的结果对象实体
let result = function(code,message,result){
    this.code = code;
    this.message = message;
    this.result = result;
} 
// 文章信息的对应实体
let article = function(title,subtitle,titleimg,content,userid){
    this.title = title || null;
    this.subtitle = subtitle || null;
    this.titleimg = titleimg || null;
    this.content = content || null;
    this.userid = userid || null;
}

// 借阅人信息的对应实体
let user = function(nickname,sex,phone,email,password,headimg){
    this.nickname = nickname || null;
    this.sex = sex || null;
    this.phone = phone || null;
    this.email = email || null;
    this.password = password || null;
    this.headimg = headimg || null; 
}

// 书籍信息对应的实体
let books = function(name,imgSrc,desc,classId,purchaser,buylink,buydate,openid,bookId){
    this.name = name || null;
    this.imgSrc = imgSrc || null;
    this.desc = desc || null;
    this.classId = classId || null;
    this.purchaser = purchaser || null;
    this.buylink = buylink || null;
    this.buydate = buydate || null;
    this.openid = openid || null;
    this.bookId = bookId || null;
}

// 借阅记录对应的实体
let borrowRecords = function(bookId,staffId,refid,remark,clientIp,openid){
    this.bookId = bookId || null;
    this.staffId = staffId || null;
    this.refid = refid || null;
    this.remark = remark || null;
    this.clientIp = clientIp || null;
    this.openid = openid || null;
}

// 评论对应的实体
let comment = function(commentid,artid,userid,content,creatAt,refid,goodnum){
    this.commentid = commentid || null;
    this.artid = artid || null;
    this.userid = userid || null;
    this.content = content || null;
    this.creatAt = creatAt || null;
    this.refid = refid || null;
    this.goodnum = goodnum || null;
}

let good = function(goodid,artid,userid){
    this.goodid = goodid || null;
    this.userid = userid || null;
    this.artid = artid || null;
}

let active = function(activeid,userid,title,subtitle,titleimg,content,address,money,type,publisher,isExist,time){
    this.activeid = activeid || null;
    this.userid = userid || null;
    this.title = title || null;
    this.subtitle = subtitle || null;
    this.titleimg = titleimg || null;
    this.content = content || null;
    this.address = address || null;
    this.money = money || null;
    this.type = type || null;
    this.publisher = publisher || null;
    this.isExist = isExist || null;
    this.time = time || null;
}

let joiner = function(id,userid,phone,email,remark,num,activeid){
    this.id = id || null;
    this.userid = userid || null;
    this.phone = phone || null;
    this.email = email || null;
    this.remark = remark || null;
    this.num = num || null;
    this.activeid = activeid || null;
}

let chat = function(id,tag,title,titleimg,content,creatAct,comnum){
    this.id = id || null;
    this.tag = tag || null;
    this.title = title || null;
    this.titleimg = titleimg || null;
    this.content = content || null;
    this.ncreatActum = creatAct || null;
    this.comnum = comnum || null;
}

module.exports = {
    result: result,
    user: user,
    books: books,
    borrowRecords: borrowRecords,
    article: article,
    comment: comment,
    good: good,
    active: active,
    joiner: joiner,
    chat: chat
}