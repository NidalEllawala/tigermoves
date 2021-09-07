"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require('koa');
const app = new Koa();
const router_1 = require("./router");
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const socket_io_1 = require("socket.io");
const httpServer = require('http').createServer(app.callback());
const io = new socket_io_1.Server(httpServer, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
});
const gamefunctions_1 = require("./model/gamefunctions");
const PORT = 3001;
app.use(cors());
app.use(bodyParser());
app.use(router_1.router.routes());
app.use(router_1.router.allowedMethods());
io.on('connection', (socket) => {
    console.log('front end connected');
    socket.on('join this game', async (join) => {
        const game = await gamefunctions_1.getGame(join.gameId);
        if (game) {
            if (game.tiger === '' || game.goat === '') {
                await gamefunctions_1.addPlayer(game, join.player, socket.id);
            }
            if (game.playerCount === 1) {
                io.to(socket.id).emit('message', { message: 'waiting for other player' });
            }
            if (game.playerCount === 2) {
                //const players = getGame(join.gameId);
                io.to(game.goat).to(game.tiger).emit('message', { message: 'both players have joined' });
                const board = gamefunctions_1.currentBoardPosition(game.game);
                io.to(game.goat).to(game.tiger).emit('update board', board);
                //io.to(game.goat).to(game.tiger).emit('update board', getGame(join.gameId).board.currentBoardPosition());
                //nextTurn(join.gameId);
            }
        }
    });
});
//io.on("connection", (socket: Socket) => {
// socket.on('join this game', (join) => {
//   if (gameExists(join.gameId)) {
//     const game = getGame(join.gameId)
//     if (game.tiger === '' || game.goat === '') {
//       addPlayer(join.gameId, join.player, socket.id);
//       io.to(socket.id).emit('player has joined', {player: join.player});
//       if (game.playerCount === 1) {
//         io.to(socket.id).emit('waiting for other player');
//       }
//       if (game.playerCount === 2) {
//         const players = getGame(join.gameId);
//         io.to(players.goat).to(players.tiger).emit('both players have joined');
//         io.to(players.goat).to(players.tiger).emit('update board', getGame(join.gameId).board.currentBoardPosition());
//         nextTurn(join.gameId);
//       }
//     }
//   } else {
//     io.to(socket.id).emit('server full');
//     socket.disconnect();
//     return;
//   }
// });
//});
httpServer.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`);
});
//export { httpServer };
// app.listen(PORT, () => {
//   console.log(`server listening on http://localhost:${PORT}`);
// });
//# sourceMappingURL=index.js.map