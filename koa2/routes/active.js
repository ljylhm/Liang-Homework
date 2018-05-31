const router = require("koa-router")();

let helper = require("../tool/helper");
let activeAct = require("../actions/active");

router.post("/addActive", async (ctx, next) => {
    let result = await activeAct.addActive(ctx, next);
    ctx.type = "json";
    ctx.body = result;
});

router.get("/queryAllActive", async (ctx, next) => {
    let result = await activeAct.queryAllActive(ctx, next);
    ctx.type = "json";
    ctx.body = result;
});

router.post("/queryActiveItem", async (ctx, next) => {
    let result = await activeAct.queryActiveItem(ctx, next);
    ctx.type = "json";
    ctx.body = result;
});

module.exports = router;