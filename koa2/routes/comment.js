const router = require("koa-router")();

let helper = require("../tool/helper");
let commentAct = require("../actions/comment");

router.get("/queryCommentArt", async (ctx, next) => {
    let result = await commentAct.queryCommentArt(ctx, next);
    ctx.type = "json";
    ctx.body = result;
});

router.get("/queryCommentArt2", async (ctx, next) => {
    let result = await commentAct.queryCommentArt2(ctx, next);
    ctx.type = "json";
    ctx.body = result;
});

router.get("/queryCommentArt3", async (ctx, next) => {
    let result = await commentAct.queryCommentArt3(ctx, next);
    ctx.type = "json";
    ctx.body = result;
});

router.post("/addCommentAct", async (ctx, next) => {
    let result = await commentAct.addCommentAct(ctx, next);
    ctx.type = "json";
    ctx.body = result;
});

router.post("/addCommentAct2", async (ctx, next) => {
    let result = await commentAct.addCommentAct2(ctx, next);
    ctx.type = "json";
    ctx.body = result;
});

router.post("/addCommentAct3", async (ctx, next) => {
    let result = await commentAct.addCommentAct3(ctx, next);
    ctx.type = "json";
    ctx.body = result;
});


module.exports = router;