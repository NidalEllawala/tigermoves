const Koa = require('koa');
import { router } from './router';
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');


const PORT = 3001;

const app = new Koa();
app.use(cors());
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`);
});