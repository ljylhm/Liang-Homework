const router = require("koa-router")();

let helper = require("../tool/helper");
let commentAct = require("../actions/comment");

router.get("/queryCommentArt", async (ctx, next) => {
    let result = await commentAct.queryCommentArt(ctx, next);
    ctx.type = "json";
    ctx.body = result;
});

module.exports = router;