const Koa = require('koa');
const app = new Koa();

//koa-bodyparser
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

//koa-router
const router = require('koa-router')();
app.use(router.routes());

app.use(async (ctx) => {
  ctx.body = 'Hello World';
});

router.get('/', async (ctx, next) => {
  ctx.body = 'Hello World';
});

app.listen(3000);