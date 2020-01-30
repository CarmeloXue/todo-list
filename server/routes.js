const Router = require("koa-router");
const usersApi = require("./controller/user");

const router = new Router();

router
  .get("/", async ctx => {
    await ctx.render("index.html");
  })
  .get("/api/v1/persons", async ctx => {
    const usersAsync = await usersApi.getUsers();
    ctx.status = 200;
    ctx.body = usersAsync;
  })
  .post("/api/v1/persons", async ctx => {
    const { name, phone } = ctx.request.body;

    const saveAsync = await usersApi.saveUser(name, phone);
    ctx.status = 200;
    ctx.body = saveAsync;
  });
module.exports = router;
