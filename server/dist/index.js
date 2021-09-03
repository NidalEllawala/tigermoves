"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require('koa');
const app = new Koa();
const router_1 = require("./router");
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const httpServer = require('http').createServer(app.callback());
const PORT = 3001;
app.use(cors());
app.use(bodyParser());
app.use(router_1.router.routes());
app.use(router_1.router.allowedMethods());
httpServer.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`);
});
// app.listen(PORT, () => {
//   console.log(`server listening on http://localhost:${PORT}`);
// });
//# sourceMappingURL=index.js.map