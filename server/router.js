const Router = require('@koa/router');
const router = new Router();

const { helloWorld } = require('./controllers/controller');

router.get('/', helloWorld);

module.exports = { router };