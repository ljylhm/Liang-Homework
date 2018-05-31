const router = require("koa-router")();

let helper = require("../tool/helper");
let joinAct = require("../actions/join");

router.post("/addJoiner", async (ctx, next) => {
    let result = await joinAct.addJoiner(ctx, next);
    ctx.type = "json";
    ctx.body = result;
});

router.post("/haveJoin", async (ctx, next) => {
    let result = await joinAct.haveJoin(ctx, next);
    ctx.type = "json";
    ctx.body = result;
})

router.post("/queryAllByitem", async (ctx, next) => {
    let result = await joinAct.queryAllByitem(ctx, next);
    ctx.type = "json";
    ctx.body = result;
})


module.exports = router;