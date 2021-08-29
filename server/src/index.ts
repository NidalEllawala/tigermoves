import Koa = require('koa');
const PORT = 3001;
const app = new Koa();
import { router } from './router';

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`);
});