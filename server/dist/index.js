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
    socket.on('join this game', async (join) => {
        const game = await gamefunctions_1.getGame(join.gameId);
        if (game) {
            if (game.tiger === '' || game.goat === '') {
                await gamefunctions_1.addPlayer(game, join.player, socket.id);
                await game.save();
            }
            if (game.playerCount === 1) {
                io.to(socket.id).emit('message', { message: 'waiting for other player' });
            }
            if (game.playerCount === 2) {
                io.to(game.goat).to(game.tiger).emit('message', { message: 'both players have joined' });
                const board = gamefunctions_1.currentBoardPosition(game.game);
                io.to(game.goat).to(game.tiger).emit('update board', board);
                nextTurn(game);
            }
        }
    });
    socket.on('goat placed', async (move) => {
        const game = await gamefunctions_1.getGame(move.gameId);
        gamefunctions_1.goatPlaced(move.index, game);
        await game.save();
        const board = gamefunctions_1.currentBoardPosition(game.game);
        io.to(game.goat).to(game.tiger).emit('update board', board);
        nextTurn(game);
    });
    async function nextTurn(game) {
        const turn = gamefunctions_1.getTurn(game.game);
        console.log(turn);
        switch (turn) {
            case 'goats move - Phase 1':
                const spaces = gamefunctions_1.emptySpaces(game.game);
                io.to(game.goat).emit('place goat', { emptySpaces: spaces });
                break;
            case 'goats move - Phase 2':
                const goatsMoves = gamefunctions_1.getMoves('goat', game.game);
                io.to(game.goat).emit('goats turn', { possibleMoves: goatsMoves });
                break;
            case 'tigers move':
                console.log('case called');
                const tigersMoves = gamefunctions_1.getMoves('tiger', game.game);
                await game.save();
                io.to(game.tiger).emit('tigers turn', { possibleMoves: tigersMoves });
                break;
        }
    }
});
httpServer.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map