const Koa = require("koa");
const app = new Koa();
const router = require("./routes");
const views = require("koa-views");
const path = require("path");
const serve = require("koa-static");
const mongoose = require("mongoose");
const cors = require("@koa/cors");
const body = require("koa-body");

mongoose.connect("mongodb://ec2-52-221-181-89.ap-southeast-1.compute.amazonaws.com:27017/demo", { useNewUrlParser: true });

app.use(cors());
app.use(body());
app.use(views(path.resolve(process.cwd() + "/dist"), { map: { html: "ejs" } }));
app.use(serve(path.resolve(process.cwd() + "/dist")));

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
