const router = require("koa-router")();

let helper = require("../tool/helper");
let activeAct = require("../actions/chat");

router.post("/queryChat", async (ctx, next) => {
    let result = await activeAct.queryChat(ctx, next);
    ctx.type = "json";
    ctx.body = result;
});

router.post("/addChat", async (ctx, next) => {
    let result = await activeAct.addChat(ctx, next);
    ctx.type = "json";
    ctx.body = result;
})

router.post("/queryChatItem", async (ctx, next) => {
    let result = await activeAct.queryChatItem(ctx, next);
    ctx.type = "json";
    ctx.body = result;
})

module.exports = router;