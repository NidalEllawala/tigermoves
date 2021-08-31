"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require('koa');
const router_1 = require("./router");
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const PORT = 3001;
const app = new Koa();
app.use(cors());
app.use(bodyParser());
app.use(router_1.router.routes());
app.use(router_1.router.allowedMethods());
app.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map