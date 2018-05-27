const router = require("koa-router")();

let helper = require("../tool/helper");
let articleAct = require("../actions/article");

router.get("/queryArticle", async (ctx, next) => {
  let result = await articleAct.queryArticle(ctx, next);
  ctx.type = "json";
  ctx.body = result;
});

router.post("/addArticle", async (ctx, next) => {
  let result = await articleAct.addArticle(ctx, next);
  ctx.type = "json";
  ctx.body = result;
});

router.get("/queryArticleById", async (ctx, next) => {
  let result = await articleAct.queryArticleById(ctx, next);
  ctx.type = "json";
  ctx.body = result;
});


module.exports = router;
