const Router = require('@koa/router');
const router = new Router();

import { helloWorld } from './controllers/controller';

router.get('/', helloWorld);

export { router };