const Router = require('@koa/router');
const router = new Router();

import { helloWorld, createNewGame, joinGame } from './controllers/controller';

router.get('/', helloWorld);

router.post('/newGame', createNewGame);

router.post('/joinGame', joinGame);

export { router };