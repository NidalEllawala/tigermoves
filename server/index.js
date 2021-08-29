'use strict'

const Koa = require('koa');
const PORT = 3000;
const app = new Koa();
const { router } = require('./router');

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`);
})