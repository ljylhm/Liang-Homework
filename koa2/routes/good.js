const router = require("koa-router")();

let helper = require("../tool/helper");
let goodAct = require("../actions/good");

router.get("/queryGoodArt", async (ctx, next) => {
    let result = await goodAct.queryGood(ctx, next);
    ctx.type = "json";
    ctx.body = result;
});

router.post("/addNewGoodArt", async (ctx, next) => {
    let result = await goodAct.addNewGoodArt(ctx, next);
    ctx.type = "json";
    ctx.body = result;
});

router.get("/queryGoodArtByItem", async (ctx, next) => {
    let result = await goodAct.queryGoodArtByItem(ctx, next);
    ctx.type = "json";
    ctx.body = result;
});

router.post("/queryAllGoodArtByArtId", async (ctx, next) => {
    let result = await goodAct.queryAllGoodArtByArtId(ctx, next);
    ctx.type = "json";
    ctx.body = result;
});

module.exports = router;