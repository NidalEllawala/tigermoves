const Koa = require('koa');
const app = new Koa();
import { router } from './router';
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
import { Server, Socket } from "socket.io";
const httpServer = require('http').createServer(app.callback());
const io = new Server(httpServer);

// ...


const PORT = 3001;

app.use(cors());
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

io.on("connection", (socket: Socket) => {
});

httpServer.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`);
});


// app.listen(PORT, () => {
//   console.log(`server listening on http://localhost:${PORT}`);
// });