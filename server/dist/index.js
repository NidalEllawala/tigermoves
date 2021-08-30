"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require('koa');
const PORT = 3001;
const app = new Koa();
const router_1 = require("./router");
app.use(router_1.router.routes());
app.use(router_1.router.allowedMethods());
app.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map