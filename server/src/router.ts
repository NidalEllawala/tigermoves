const Router = require('@koa/router');
const router = new Router();

import { helloWorld, createNewGame } from './controllers/controller';

router.get('/', helloWorld);

router.post('/newGame', createNewGame);

export { router };