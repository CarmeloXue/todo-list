const Koa = require("koa");
const app = new Koa();
const router = require("./routes");
const views = require("koa-views");
const path = require("path");
const serve = require("koa-static");
const mongoose = require("mongoose");
const cors = require("@koa/cors");
const body = require("koa-body");

mongoose.connect("mongodb://127.0.0.1:27017/demo", { useNewUrlParser: true });

app.use(cors());
app.use(body());
app.use(views(path.resolve(process.cwd() + "/dist"), { map: { html: "ejs" } }));
app.use(serve(path.resolve(process.cwd() + "/dist")));

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
