"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const Router = require('@koa/router');
const router = new Router();
exports.router = router;
const controller_1 = require("./controllers/controller");
router.get('/', controller_1.helloWorld);
router.post('/newGame', controller_1.createNewGame);
//# sourceMappingURL=router.js.map